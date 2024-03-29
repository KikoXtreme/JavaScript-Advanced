function attachEventsListeners() {
    let daysButton = document.getElementById('daysBtn').addEventListener('click', onClickDays);
    let hoursButton = document.getElementById('hoursBtn').addEventListener('click', onClickHours);
    let minutesButton = document.getElementById('minutesBtn').addEventListener('click', onClickMinutes);
    let secondsButton = document.getElementById('secondsBtn').addEventListener('click', onClickSeconds);

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    function onClickDays() {
        hours.value = days.value * 24;
        minutes.value = days.value * 24 * 60;
        seconds.value = days.value * 24 * 60 * 60;
    }
    function onClickHours() {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = hours.value * 60 * 60;
    }
    function onClickMinutes() {
        days.value = minutes.value / 24 / 60;
        hours.value = minutes.value / 60;
        seconds.value = minutes.value * 60;
    }
    function onClickSeconds() {
        days.value = seconds.value / 60 / 60 / 24;
        hours.value = seconds.value / 60 / 60;
        minutes.value = seconds.value / 60;
    }
}