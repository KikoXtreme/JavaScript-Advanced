function circleArea(input) {
    let typeOfInput = typeof input;
    let area = input ** 2 * Math.PI;

    if (typeOfInput === 'number') {
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    }
}

circleArea(5);
circleArea('name');