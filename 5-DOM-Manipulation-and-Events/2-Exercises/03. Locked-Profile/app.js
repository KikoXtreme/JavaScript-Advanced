function lockedProfile() {
    Array
        .from(document.querySelectorAll('.profile button'))
        .forEach(b => b.addEventListener('click', onClick));

    function onClick(ev) {
        let profile = ev.target.parentElement;
        let info = profile.querySelector('div');
        let isLocked = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isLocked) {
            if (ev.target.textContent === 'Show more') {
                ev.target.textContent = 'Hide it';
                info.style.display = 'block';
            } else {
                ev.target.textContent = 'Show more';
                info.style.display = 'none';
            }
        }
    }
}

// function lockedProfile() {
//     let buttons = Array.from(document.querySelectorAll('.profile button'));

//     for (let button of buttons) {
//         button.addEventListener('click', onClick)
//     }

//     function onClick(ev) {
//         let profile = ev.target.parentElement;
//         let info = profile.querySelector('div');
//         let isLocked = profile.querySelector('input[type="radio"][value="unlock"]').checked;

//         if (isLocked) {
//             if (ev.target.textContent === 'Show more') {
//                 ev.target.textContent = 'Hide it';
//                 info.style.display = 'block';
//             } else {
//                 ev.target.textContent = 'Show more';
//                 info.style.display = 'none';
//             }
//         }
//     }
// }