function solve() {
    document.querySelector('button').addEventListener('click', onClick);
    menuTo = menuToConstruct((document.getElementById('selectMenuTo')));

    function menuToConstruct(menuTo) {
        menuTo.innerHTML = '<option selected value="binary">Binary</option><option value="hexadecimal">Hexadecimal</option>';
        return menuTo;
    }

    function onClick() {
        let result = document.getElementById('result');
        let num = Number(document.getElementById('input').value);
        let options = menuTo.value;
        options === 'hexadecimal' ? num = num.toString(16).toUpperCase() : num = num.toString(2);

        result.value = num;
    }
}