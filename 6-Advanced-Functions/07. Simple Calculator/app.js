function calculator() {
    let inputOne;
    let inputTwo;
    let result;

    function init(arg1, arg2, arg3) {
        inputOne = document.querySelector(arg1);
        inputTwo = document.querySelector(arg2);
        result = document.querySelector(arg3);
    }

    function add() {
        result.value = Number(inputOne.value) + Number(inputTwo.value);
    }

    function subtract() {
        result.value = Number(inputOne.value) - Number(inputTwo.value);
    }

    return {
        init,
        add,
        subtract,
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');