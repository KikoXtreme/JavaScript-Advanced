function juiceFlavors(array) {
    let juices = new Map;

    array.forEach(element => {
        let [fruit, quantity] = element.split(' => ');
        quantity = Number(quantity);

        if (!juices.has(fruit)) {
            juices.set(fruit, quantity);
        } else {
            let getValue = juices.get(fruit);
            juices.delete(fruit);
            juices.set(fruit, quantity + getValue);
        }
    });
    
    for (let [key, value] of juices) {
        if (value / 1000 >= 1) {
            console.log(`${key} => ${Math.floor(value / 1000)}`);
        }
    }
}

juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
console.log('---');
juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);

/*
function juiceFlavors(array) {
    let juices = {};

    array.forEach(element => {
        let [fruit, quantity] = element.split(' => ');
        quantity = Number(quantity);
        if (!juices[fruit]) {
            juices[fruit] = quantity;
        } else {
            juices[fruit] += quantity;
        }
    });

    for (let [key, value] of Object.entries(juices)) {
        if (value / 1000 >= 1) {
            console.log(`${key} => ${Math.floor(value / 1000)}`);
        }
    }
}
*/