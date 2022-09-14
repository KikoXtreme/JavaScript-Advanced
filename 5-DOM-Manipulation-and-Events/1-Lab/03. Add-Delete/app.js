function addItem() {
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;

    let button = document.createElement('a');
    button.textContent = '[Delete]';
    button.href = '#';
    liElement.appendChild(button);
    button.addEventListener('click', removeElement);

    let list = document.getElementById('items');
    list.appendChild(liElement);

    input.value = '';

    function removeElement() {
        liElement.remove();
    }
    // function removeElement(ev) {
    //     let parent = ev.target.parentNode;
    //     parent.remove();
    // }
}