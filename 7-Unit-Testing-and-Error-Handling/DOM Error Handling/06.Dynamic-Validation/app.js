function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', onChange);
    let validMailPattern = /(^[a-z]+\@[a-z]+\.[a-z]+$)/;

    function onChange(ev) {
        if (!validMailPattern.test(input.value)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }
}