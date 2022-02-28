function sameNumbers(input) {
    let sum = 0;
    let str = input.toString();
    let isSame = true;

    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);

        if (str[i] !== str[0]) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);