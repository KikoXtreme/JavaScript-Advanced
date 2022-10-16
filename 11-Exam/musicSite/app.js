window.addEventListener('load', solve);

function solve() {
    let gerneInput = document.getElementById('genre');
    let songInput = document.getElementById('name');
    let authorInpur = document.getElementById('author');
    let dateInput = document.getElementById('date');

    let allHitsDivCont = document.querySelector('#all-hits div');
    let saveHitsDivCont = document.querySelector('#saved-hits div');

    let likes = document.querySelector('#total-likes div p');
    let likesCount = 0;

    // let pattern = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/g;
    // Number.isNaN(Number(gerneInput.value)) && Number.isNaN(Number(authorInpur.value)) && Number.isNaN(Number(songInput.value))
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSongs);

    function addSongs(ev) {
        ev.preventDefault();

        if (gerneInput.value !== '' && songInput.value !== '' && authorInpur.value !== '' && dateInput.value !== '') {

            let div = document.createElement('div');
            div.classList.add('hits-info');
            div.innerHTML =
                `<img src="./static/img/img.png"><h2>Gerne: ${gerneInput.value}</h2><h2>Name: ${songInput.value}</h2><h2>Author: ${authorInpur.value}</h2><h3>Date: ${dateInput.value}</h3><button class="save-btn">Save song</button><button class="like-btn">Like song</button><button class="delete-btn">Delete</button>`;

            let saveDiv = document.createElement('div');
            saveDiv.classList.add('hits-info');
            saveDiv.innerHTML =
                `<img src="./static/img/img.png"><h2>Gerne: ${gerneInput.value}</h2><h2>Name: ${songInput.value}</h2><h2>Author: ${authorInpur.value}</h2><h3>Date: ${dateInput.value}</h3><button class="delete-btn">Delete</button>`;

            let saveBtn = div.querySelectorAll('button')[0];
            let likeBtn = div.querySelectorAll('button')[1];

            let deleteBtnFirst = div.querySelectorAll('button')[2];

            let deleteBtn = saveDiv.querySelector('button');

            allHitsDivCont.appendChild(div);

            saveBtn.addEventListener('click', onSave.bind(null, div, saveDiv));
            likeBtn.addEventListener('click', onLike);
            deleteBtn.addEventListener('click', onDelete);
            deleteBtnFirst.addEventListener('click', onDeleteFirst);
        }
        gerneInput.value = '';
        songInput.value = '';
        authorInpur.value = '';
        dateInput.value = '';
    }

    function onDeleteFirst(ev) {
        ev.target.parentElement.remove();
    }

    function onSave(div, saveDiv) {
        saveHitsDivCont.appendChild(saveDiv);
        div.remove();
    }

    function onDelete(ev) {
        ev.target.parentElement.remove();
    }

    function onLike(ev) {
        ev.target.disabled = true;
        likesCount++;
        likes.textContent = `Total Likes: ${likesCount}`;
    }
}