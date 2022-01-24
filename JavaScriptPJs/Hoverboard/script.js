const container = document.getElementById('container');
const colors = ['#0f0e17', '#ff8906', '#a7a9be', '#e53170', '#f25f4c'];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseout', () => {
    removeColor(square);
  });

  container.appendChild(square);
}

function setColor(e) {
  const color = getRandomColor();
  e.style.background = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
  e.style.background = `#1d1d1d`;
  e.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
