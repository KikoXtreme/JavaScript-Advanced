function validate() {
    let userNamePattern = /(^[A-Za-z0-9]{3,20}$)/;
    let passPattern = /(^[\w]{5,15}$)/;
    let emailPattern = /(^[^@.]+@[^@]*\.[^@]*$)/;

    let userInput = document.getElementById('username');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let confirmPassInput = document.getElementById('confirm-password');

    let isValidInput = true;
    let isChecked = false;

    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', onSubmit);

    let check = document.getElementById('company');
    check.addEventListener('change', changed);

    function onSubmit(ev) {
        ev.preventDefault();
        if (!userNamePattern.test(userInput.value)) {
            isValidInput = false;
            userInput.style.borderColor = 'red';
        } else {
            userInput.style.border = 'none';
        }

        if (!passPattern.test(passwordInput.value) && !passPattern.test(confirmPassInput.value) || passwordInput.value !== confirmPassInput.value) {
            isValidInput = false;
            passwordInput.style.borderColor = 'red';
            confirmPassInput.style.borderColor = 'red';
        } else {
            isValidInput = true;
            passwordInput.style.border = 'none';
            confirmPassInput.style.border = 'none';
        }

        if (!emailPattern.test(emailInput.value)) {
            isValidInput = false;
            emailInput.style.borderColor = 'red';
        } else {
            emailInput.style.border = 'none';
        }

        let validDiv = document.getElementById('valid');

        if (isValidInput) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }

        if (isChecked) {
            let companyNum = document.getElementById('companyNumber');

            if (Number(companyNum.value) < 1000 || Number(companyNum.value) > 9999) {
                isChecked = true;
                isValidInput = false;
                companyNum.style.borderColor = 'red';
            } else {
                isChecked = false;
                companyNum.style.border = 'none';
            }
        }
    }

    function changed(ev) {
        let companyInput = document.getElementById('companyInfo');
        if (ev.target.checked) {
            isChecked = true;
            companyInput.style.display = 'block';
        } else {
            isChecked = false;
            companyInput.style.display = 'none';
        }
    }
}