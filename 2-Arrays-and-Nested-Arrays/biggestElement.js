function biggestElement(array) {
    let max = Number.MIN_SAFE_INTEGER;
    let result = 0;

    for (let row of array) {
        for (let el of row) {

            if (el >= max) {
                max = el;
                result = el;
            }
        }
    }
    return result;
}

biggestElement(
    [[20, 50, 10],
    [8, 33, 145]]
);
biggestElement(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
);