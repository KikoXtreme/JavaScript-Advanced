function diagonalSums(array) {
    let resultMain = 0;
    let resultSecondary = 0;

    for (let i = 0; i < array.length; i++) {
        resultMain += array[i][i];
        resultSecondary += array[i][array.length - 1 - i];
    }

    console.log(`${resultMain} ${resultSecondary}`);
}

diagonalSums(
    [[20, 40],
    [10, 60]]
);
diagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);