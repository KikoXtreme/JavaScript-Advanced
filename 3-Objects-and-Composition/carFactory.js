function carFactory(object) {
    let result = {};
    function getEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else {
            return { power: 200, volume: 3500 };
        }
    }

    let properWheelSize = object.wheelsize % 2 === 0 ? object.wheelsize - 1 : object.wheelsize;
    result.model = object.model;
    result.engine = getEngine(object.power);
    result.carriage = { type: object.carriage, color: object.color };
    result.wheels = new Array(4).fill(properWheelSize, 0, 4);

    return result;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));