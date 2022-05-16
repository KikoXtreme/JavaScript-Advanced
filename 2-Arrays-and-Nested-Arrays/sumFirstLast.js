function sumFirstLast(array) {
    let first = Number(array.shift());
    let last = Number(array.pop());

    return first + last;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));