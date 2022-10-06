function breakfastRobot() {
    let food = {
        apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2, },
        lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20, },
        burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3, },
        eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1, },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10, },
    }

    let storage = {
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        protein: 0,
    }

    function restock(element, quantity) {
        storage[element] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        let remainingStorage = {};

        for (let element in food[recipe]) {
            let remaining = storage[element] - food[recipe][element] * quantity;
            if (remaining < 0) {
                return `Error: not enough ${element} in stock`;
            } else {
                remainingStorage[element] = remaining;
            }
        }

        Object.assign(storage, remainingStorage);
        return 'Success';
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }

    function control(str) {
        let [command, meal, quantity] = str.split(' ');

        if (command === 'restock') {
            return restock(meal, Number(quantity));
        } else if (command === 'prepare') {
            return prepare(meal, Number(quantity));
        } else if (command === 'report') {
            return report();
        }
    }
    return control;
}

let manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); // Error: not enough carbohydrate in stock 