function solve() {
    let [name, hall, price] = document.querySelectorAll('#container input');
    let movieSection = document.querySelector('#movies ul');
    let archiveSection = document.querySelector('#archive ul');

    document.querySelector('#container button').addEventListener('click', addMovie);

    archiveSection.parentElement.querySelector('button').addEventListener('click', clearAll);

    function addMovie(ev) {
        ev.preventDefault();
        if (name.value !== '' && hall.value !== '' && price.value !== '' && !isNaN(Number(price.value))) {
            let movie = document.createElement('li');
            movie.innerHTML =
                `<span>${name.value}</span>
                <strong>${hall.value}</strong>
                <div>
                    <strong>${Number(price.value).toFixed(2)}</strong>
                    <input placeholder="Tickets Sold">
                    <button>Archive</button>
                </div>`;
            movieSection.appendChild(movie);
            movie.querySelector('div button').addEventListener('click', addToArchive);
            name.value = '';
            hall.value = '';
            price.value = '';
        }
    }

    function addToArchive(ev) {
        let input = ev.target.parentElement.querySelector('input');
        let ticketPrice = ev.target.parentElement.querySelector('strong');
        let movieName = ev.target.parentElement.parentElement.querySelector('span');
        // Number(input.value) || input.value === '0' 
        if ((input.value !== '' && Number(input.value)) || input.value === '0') {
            let sum = Number(input.value) * Number(ticketPrice.textContent);
            let liElement = document.createElement('li');
            liElement.innerHTML =
                `<span>${movieName.textContent}</span>
                <strong>Total amount: ${sum.toFixed(2)}</strong>
                <button>Delete</button>`;
            archiveSection.appendChild(liElement);

            let btn = Array.from(archiveSection.querySelectorAll('button'));
            btn.forEach(btn => btn.addEventListener('click', deleteMovie));
            // archiveSection.querySelector('button').addEventListener('click', deleteMovie);
        }
        ev.target.parentElement.parentElement.remove();
    }

    function deleteMovie(ev) {
        ev.target.parentElement.remove();
        // document.querySelector('#archive ul').remove();
    }

    function clearAll() {
        // document.querySelector('#archive ul').remove();
        archiveSection.innerHTML = '';
    }
}

/*
function solve() {
    let displayMovie = document.querySelector('#movies ul');
    let archive = document.querySelector('#archive ul');
    archive.nextElementSibling.addEventListener('click', () => archive.innerHTML = null);  // clear archive
    document.querySelector('button').addEventListener('click', addMovieOnScreen);

    function addMovieOnScreen(e) {
        e.preventDefault();
        let [name, hall, price] = document.querySelectorAll('#container input');

        if (name.value && hall.value && Number(price.value) || price.value === '0') {

            displayMovie.innerHTML +=
                `<li>
                    <span>${name.value}</span>
                    <strong>Hall: ${hall.value}</strong>
                    <div>
                      <strong>${price.value}</strong>
                      <input placeholder="Tickets Sold">
                      <button>Archive</button>
                    </div>
                </li>`

            name.value = null;
            hall.value = null;
            price.value = null;

        }

        Array.from(displayMovie.querySelectorAll('button')).forEach(btn => btn.addEventListener('click', addToArchive));

        function addToArchive(btn) {

            let ticketPrice = btn.target.parentNode.children[0];
            let ticketsSold = btn.target.parentNode.children[1];

            if (Number(ticketsSold.value) || ticketsSold.value === '0') {

                archive.innerHTML +=
                    `<li>
                        <span>${btn.target.parentNode.parentNode.children[0].textContent}</span>
                        <strong>Total amount: ${(ticketPrice.textContent * ticketsSold.value).toFixed(2)}</strong>
                        <button>Delete</button>
                    </li>`

                btn.target.parentNode.parentNode.remove(); // remove movie from screen
                Array.from(archive.querySelectorAll('button')).forEach(btn => btn.addEventListener('click', (btn) => btn.target.parentNode.remove())); // remove  movie from archive

            }
        }
    }
}
*/