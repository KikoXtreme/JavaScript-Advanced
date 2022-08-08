function generateReport() {
    let output = document.getElementById('output');
    let row = document.querySelectorAll('tbody tr');
    let colomn = document.querySelectorAll('thead tr th');
    let result = [];

    for (let i = 0; i < row.length; i++) {
        let currectObject = {};

        for (let j = 0; j < colomn.length; j++) {

            if (colomn[j].firstElementChild.checked) {
                currectObject[colomn[j].firstElementChild.name] = row[i].children[j].textContent;
            }
        }

        if (currectObject) {
            result.push(currectObject);
        }
    }

    output.innerHTML = JSON.stringify(result);
}