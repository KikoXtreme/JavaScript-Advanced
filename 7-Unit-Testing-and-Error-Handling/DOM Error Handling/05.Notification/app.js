function notify(message) {
  let notification = document.getElementById('notification');

  notification.textContent = message;
  notification.style.display = 'block';

  notification.addEventListener('click', onHide);

  function onHide(ev) {
    notification.style.display = 'none';
  }
}