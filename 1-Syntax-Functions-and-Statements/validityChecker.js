function validityChecker(x1, y1, x2, y2) {
    let isValid1 = '';
    let isValid2 = '';
    let isValid3 = '';

    let dis1 = Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2));
    let dis2 = Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2));
    let dis3 = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

    if (Number.isInteger(dis1)) {
        isValid1 = 'valid';
    } else {
        isValid1 = 'invalid'
    }

    if (Number.isInteger(dis2)) {
        isValid2 = 'valid';
    } else {
        isValid2 = 'invalid'
    }

    if (Number.isInteger(dis3)) {
        isValid3 = 'valid';
    } else {
        isValid3 = 'invalid'
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid1}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid2}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid3}`);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);