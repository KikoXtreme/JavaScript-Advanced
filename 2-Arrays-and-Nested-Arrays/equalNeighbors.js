function equalNeighbors(array) {
    let sum = 0;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] === array[i + 1][j]) {
                sum++;
            }
            if (array[i][j] === array[i][j + 1]) {
                sum++;
            }
            if (i === array.length - 2 && array[i + 1][j] === array[i + 1][j + 1]) {
                sum++;
            }
        }
    }
    console.log(sum);
}

equalNeighbors(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);

equalNeighbors(
    [['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);