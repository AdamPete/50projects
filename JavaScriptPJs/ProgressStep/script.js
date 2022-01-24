const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentAcitve = 1; 

next.addEventListener('click', () => {
  currentAcitve++;

  if(currentAcitve > circles.length) {
    currentAcitve = circles.length; 
  }

  update();
});

prev.addEventListener('click', () => {
  currentAcitve--;

  if(currentAcitve < 1) {
    currentAcitve = 1; 
  }

  update(); 
});

function update() {
  circles.forEach((circle, idx) => {
    if(idx < currentAcitve) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })
  const actives = document.querySelectorAll('.active');
  
  progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';

  if(currentAcitve === 1) {
    prev.disabled = true; 
  } else if(currentAcitve === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}