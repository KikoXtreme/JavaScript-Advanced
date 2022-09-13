function addItem() {
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;

    let list = document.getElementById('items');
    list.appendChild(liElement);

    input.value = '';
}