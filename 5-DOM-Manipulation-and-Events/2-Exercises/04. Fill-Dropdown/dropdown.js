function addItem() {
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');
    let dropDownMenu = document.getElementById('menu');

    let option = document.createElement('option');
    dropDownMenu.appendChild(option);

    option.textContent += inputText.value;
    option.textContent += inputValue.value;

    inputText.value = '';
    inputValue.value = '';
}