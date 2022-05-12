function smallestTwoNumbers(array) {
    array = array.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < 2; i++) {
        result.push(array.shift());
    }
    console.log(result.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);