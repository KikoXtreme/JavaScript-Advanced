function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);
    let result = document.getElementById('result');

    function onMove(ev) {
        let box = ev.target;
        let percent = Math.floor(ev.offsetX / box.clientWidth * 100);

        result.textContent = percent + '%';
    }
}