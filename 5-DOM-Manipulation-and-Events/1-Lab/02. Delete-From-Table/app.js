function deleteByEmail() {
    let table = [...document.querySelectorAll('tbody tr')];
    let input = document.querySelector('input[name="email"]');
    let result = document.getElementById('result');

    for (let line of table) {
        let eMail = line.children[1];

        if (eMail.textContent === input.value) {
            result.textContent = 'Deleted.';
            line.remove();
        } else {
            result.textContent = 'Not found.';
        }
    }
    input.value = '';
}