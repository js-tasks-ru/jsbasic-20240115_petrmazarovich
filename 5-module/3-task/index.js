function initCarousel() {
  const leftArrow = document.querySelector('.carousel__arrow_left');
  const rightArrow = document.querySelector('.carousel__arrow_right');
  const carouselInner = document.querySelector('.carousel__inner');
  const offsetWidth = carouselInner.offsetWidth;
  let currentSlide = 0;
  function checkVisibility() {
    if (currentSlide < 3 && currentSlide > 0) {
      leftArrow.style.display = '';
      rightArrow.style.display = '';
    } else if (currentSlide === 3) {
      rightArrow.style.display = 'none';
    } else if (currentSlide === 0) {
      leftArrow.style.display = 'none';
    }
  }
  checkVisibility();
  leftArrow.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide -= 1;
      carouselInner.style.transform = `translateX(-${currentSlide * offsetWidth}px)`;
    }
    checkVisibility();
  });
  rightArrow.addEventListener('click', () => {
    if (currentSlide < 3) {
      currentSlide += 1;
      carouselInner.style.transform = `translateX(-${currentSlide * offsetWidth}px)`;
    }
    checkVisibility();
  });
}
