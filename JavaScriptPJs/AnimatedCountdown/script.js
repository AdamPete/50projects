// stuff from DOM
const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMSG = document.querySelector('.final');
const replay = document.querySelector('#replay');

const runAnimation = function () {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMSG.classList.add('show');
      }
    });
  });
};

const resetDOM = function () {
  counter.classList.remove('hide');
  finalMSG.classList.remove('show');

  nums.forEach((num) => {
    num.classList.value = '';
  });

  nums[0].classList.add('in');
};

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});

runAnimation();
