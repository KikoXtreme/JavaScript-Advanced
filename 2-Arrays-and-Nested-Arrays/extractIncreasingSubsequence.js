function extractIncreasingSubsequence(array) {
    let result = [];
    let max = Number.MIN_SAFE_INTEGER; //array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            result.push(array[i]);
            max = array[i];
        }
    }
    return result;
}

console.log(extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequence([20, 3, 2, 15, 6, 1]));

// function extractIncreasingSubsequence(array) {
//     let result = [];
//     let max = Number.MIN_SAFE_INTEGER;

//     array.reduce((accumulator, current) => {
//         if (current >= max) {
//             max = current;
//             accumulator.push(current);
//         }
//         return accumulator;
//     }, result)
//     return result;
// }