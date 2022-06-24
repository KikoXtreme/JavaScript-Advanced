function extractText() {
    let items = document.getElementById('items').children;
    let textArea = document.getElementById('result');

    for (let item of Array.from(items)) {
        textArea.value += item.textContent + '\n';
    }
}