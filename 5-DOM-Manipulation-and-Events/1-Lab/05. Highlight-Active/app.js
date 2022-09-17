function focused() {
    let fields = Array.from(document.getElementsByTagName('input'));

    for (let field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }

    function onBlur(ev) {
        ev.target.parentNode.className = 'blur';
    }
}

// function focused() {
//     Array
//         .from(document.getElementsByTagName('input'))
//         .forEach(f => {
//             f.addEventListener('focus', onFocus);
//             f.addEventListener('blur', onBlur);
//         });

//     function onFocus(ev) {
//         ev.target.parentNode.className = 'focused';
//     }

//     function onBlur(ev) {
//         ev.target.parentNode.className = 'blur';
//     }
// }