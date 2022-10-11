class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        return this.radius * 2;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }
}

let circle = new Circle(5);

console.log('instance >>> -> ', circle);
console.log('diameter fn  -> ', circle.getDiameter());
console.log('diameter get -> ', circle.diameter);

circle.diameter = 14;
console.log('diameter set -> ', circle.diameter);

console.log('area     get -> ', circle.area);