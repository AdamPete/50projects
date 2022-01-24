const sounds = ['adult-virgin', 'are-you-sure', 'freerealestate', 'nottoberacist', 'spunky', 'programer'];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    document.getElementById(sound).play();
  })

  document.getElementById('buttons').appendChild(btn);
})