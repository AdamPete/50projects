const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Gabe is gay',
  'Message Four',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const NOTIF = document.createElement('div');
  NOTIF.classList.add('toast');
  NOTIF.classList.add(type ? type : getRandomType());

  NOTIF.innerText = message ? message : getRandomMessage();

  toasts.appendChild(NOTIF);

  setTimeout(() => {
    NOTIF.remove();
  }, 2000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
