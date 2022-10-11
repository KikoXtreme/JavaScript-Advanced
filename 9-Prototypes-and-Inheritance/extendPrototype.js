class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

function extend(classDefinition) {
    classDefinition.prototype.species = 'Human';
    classDefinition.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

extend(Person);
let p = new Person("Pesho", "email@hit.bg");
console.log(p.species) //('Human', "No species property");
console.log(p.toSpeciesString()) //("I am a Human. Person (name: Pesho, email: email@hit.bg)");