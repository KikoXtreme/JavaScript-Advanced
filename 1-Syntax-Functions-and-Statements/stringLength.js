function stringLength(first, second, third) {
    let totalL = first.length + second.length + third.length;
    let avg = Math.floor(totalL / 3);

    console.log(totalL);
    console.log(avg);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');