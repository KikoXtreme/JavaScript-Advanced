function greatestCommonDivisorGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

greatestCommonDivisorGCD(15, 5);
greatestCommonDivisorGCD(2154, 458);