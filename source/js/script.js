//слайдер

const buttonPrev = document.querySelector('.slider__button--prev');
const buttonNext = document.querySelector('.slider__button--next');

const slider = document.querySelector('.slider__wrapper');

const slide = slider.querySelector('.slider__container');

const slideCount = slider.querySelectorAll('.slider__slide').length;

let left = 0;

buttonPrev.addEventListener('click', () => {
  sliderRight();
});

buttonNext.addEventListener('click', () => {
  sliderLeft();
});

const sliderLeft = () => {
  left = left + 1000;
  countTransform = slideCount * 1000 - 1000;
  if (left > countTransform) {
    left = countTransform;
  }
  slide.style.transform = `translateX(-${left}px)`;
}

const sliderRight = () => {
  left = left - 1000;
  if (left < 0) {
    left = 0;
  }
  slide.style.transform = `translateX(-${left}px)`;
}

//окно успешной отправки формы

const form = document.querySelector('.form');
const formContainer = document.querySelector('.subscribe-block__container');
const accessForm = document.querySelector('.access-block');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  formContainer.classList.add('subscribe-block__container--disabled');
  accessForm.classList.remove('access-block--disabled')
})

//скролл

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 50,
      framesCount = 5;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});