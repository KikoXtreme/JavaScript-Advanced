window.addEventListener('load', solve);

function solve() {
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);

    let furnitureList = document.getElementById('furniture-list');

    let totalPrice = document.querySelector('.total-price');

    function add(ev) {
        ev.preventDefault();

        if (modelInput.value !== '' && descriptionInput.value !== '' && yearInput.value > 0 && priceInput.value > 0) {
            let tr = document.createElement('tr');
            tr.classList.add('info');
            tr.innerHTML =
                `<td>${modelInput.value}</td><td>${Number(priceInput.value).toFixed(2)}</td><td><button class='moreBtn'>More Info</button><button class='buyBtn'>Buy it</button></td>`;

            let hideTr = document.createElement('tr');
            hideTr.classList.add('hide');
            hideTr.innerHTML =
                `<td>Year: ${yearInput.value}</td><td colspan='3'>Description: ${descriptionInput.value}</td>`;

            let moreBtn = tr.querySelectorAll('button')[0];
            let buyBtn = tr.querySelectorAll('button')[1];

            moreBtn.addEventListener('click', moreInfo);
            buyBtn.addEventListener('click', buyInfo);

            furnitureList.appendChild(tr);
            furnitureList.appendChild(hideTr);
        }

        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
    }

    function moreInfo(ev) {
        if (ev.target.textContent === 'More Info') {
            ev.target.textContent = 'Less Info';
            ev.target.parentElement.parentElement.nextElementSibling.style.display = 'contents';
        } else {
            ev.target.textContent = 'More Info';
            ev.target.parentElement.parentElement.nextElementSibling.style.display = 'none';
        }
    }

    function buyInfo(ev) {
        ev.target.parentElement.parentElement.remove();
        let price = (ev.target.parentElement.parentElement.childNodes)[1].textContent;
        totalPrice.textContent = (Number(totalPrice.textContent) + Number(price)).toFixed(2);
    }
}