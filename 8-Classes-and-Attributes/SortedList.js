class List {
    constructor() {
        this.size = 0;
        this.numbers = [];
    }

    add(element) {
        this.size++;
        this.numbers.push(element);
        this.numbers.sort((a, b) => a - b);
    }
    remove(index) {
        if (index < 0 || index >= this.numbers.length) {
            throw new Error('No such index in list');
        }
        this.size--;
        this.numbers.splice(index, 1);
    }

    get(index) {
        if (index < 0 || index >= this.numbers.length) {
            throw new Error('No such index in list');
        }
        return this.numbers[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
