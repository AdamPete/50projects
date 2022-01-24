const sliderContainer = document.querySelector('.slider-container');
const sliderRight = document.querySelector('.right-slide');
const sliderLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = sliderRight.querySelectorAll('div').length;

let activeSLideIndex = 0;

sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));

downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSLideIndex++;
    if (activeSLideIndex > slidesLength - 1) {
      activeSLideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSLideIndex--;
    if (activeSLideIndex < 0) {
      activeSLideIndex = slidesLength - 1;
    }
  }

  sliderRight.style.transform = `translateY(-${
    activeSLideIndex * sliderHeight
  }px)`;

  sliderLeft.style.transform = `translateY(${
    activeSLideIndex * sliderHeight
  }px)`;
};
