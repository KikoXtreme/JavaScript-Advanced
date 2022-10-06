function add(num) {
    let sum = num;

    function sumF(num2) {
        sum += num2;
        return sumF;
    }

    sumF.toString = () => {
        return sum;
    }
    return sumF;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());