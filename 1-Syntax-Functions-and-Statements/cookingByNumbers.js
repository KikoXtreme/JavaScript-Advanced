function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    let array = [op1, op2, op3, op4, op5];
    num = Number(num);

    for (let i = 0; i < array.length; i++) {

        if (array[i] === 'chop') {
            num /= 2;
            console.log(num);
        } else if (array[i] === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (array[i] === 'spice') {
            num += 1;
            console.log(num);
        } else if (array[i] === 'bake') {
            num *= 3;
            console.log(num);
        } else if (array[i] === 'fillet') {
            num *= 0.80;
            console.log(num);
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');