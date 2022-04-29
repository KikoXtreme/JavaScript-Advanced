function magicMatrices(array) {
    let sum = 0;
    let isEqual = true;

    for (let i = 0; i < array.length; i++) {
        sum += array[0][i];
    }

    for (let i = 0; i < array.length; i++) {
        let row = 0;
        let colomn = 0;
        for (let j = 0; j < array.length; j++) {
            row += array[i][j];
            colomn += array[j][i];
        }

        if (row !== sum || colomn !== sum) {
            isEqual = false;
            break;
        }
    }
    console.log(isEqual)
}

magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);
console.log('---');
magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);