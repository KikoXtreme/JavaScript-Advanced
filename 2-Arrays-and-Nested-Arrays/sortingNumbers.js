function sortingNumbers(array) {
    let sliced = array.slice(0);
    let sorted = array.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < sliced.length / 2; i++) {
        let first = sorted.shift();
        let last = sorted.pop();

        result.push(first);
        result.push(last);
    }
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

// function sortingNumbers(array) {
//     let sorted = array.sort((a, b) => a - b);
//     let result = [];

//     while (sorted.length !== 0) {
//         let first = sorted.shift();
//         let last = sorted.pop();

//         result.push(first);
//         result.push(last);
//     }
//     return result;
// }