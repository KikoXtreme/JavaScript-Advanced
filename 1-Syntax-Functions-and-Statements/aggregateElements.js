function aggregateElements(array) {
    let resultSum = 0;
    let resultSum1 = 0;
    let concat = '';

    for (let i = 0; i < array.length; i++) {
        resultSum += array[i];
        resultSum1 += 1 / array[i];
        concat += array[i];
    }
    console.log(resultSum);
    console.log(resultSum1);
    console.log(concat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);