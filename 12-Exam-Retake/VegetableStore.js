class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];

        this.totalPrice = 0;
    }

    loadingVegetables(vegetables) {
        vegetables.forEach(element => {
            let [type, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            this.availableProducts.push({
                type,
                quantity,
                price,
            });

            if (!this.availableProducts[type]) {
                this.availableProducts[type] = quantity;
            } else {
                this.availableProducts[type] += quantity;
            }
        });

        let result = [];
        for (let type in this.availableProducts) {
            result.push(`${type}`);
        }
        let out = result.slice(4).join(', ');
        let output = 'Successfully added ' + out;

        return output;
    }

    buyingVegetables(selectedProducts) {
        for (let type of selectedProducts) {
            if (true){
                throw new Error(`${type} is not available in the store, your current bill is ${this.totalPrice}.`);
            }
        }
    }

    rottingVegetable(type, quantity) {
        let allProds = this.availableProducts.find(a => a.type === type);
        if (allProds === undefined) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (quantity < 0) {
            return `The entire quantity of the ${type} has been removed.`
        } else {
            return `Some quantity of the ${type} has been removed.`
        }
    }

    revision() {
        let result = [
            'Available vegetables:'
        ];

        this.availableProducts
            .sort((a, b) => a.price - b.price)
            .forEach(el => result.push(`${el.type}-${el.quantity}-${el.price}`));

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result;
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
//Successfully added Okra, Beans, Celery

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

/*Successfully added Okra, Beans, Celery
Great choice! You must pay the following amount $3.50. 
Great choice! You must pay the following amount $27.65.
Uncaught Error: Banana is not available in the store, your current bill is $0.00.
*/