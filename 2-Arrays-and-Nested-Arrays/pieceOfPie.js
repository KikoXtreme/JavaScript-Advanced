function pieceOfPie(array, first, second) {
    let start = array.indexOf(first);
    let last = array.indexOf(second);

    let result = array.slice(start, last + 1);

    return result;
}

console.log(pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));