import createElement from '../../assets/lib/create-element.js';
/*let slides = [
  {
    name: 'Penang shrimp', // Название товара со слайда
    price: 16, // Цена товара со слайда
    image: 'penang_shrimp.png', // Название файла картинки со слайда
    id: 'penang-shrimp' // Уникальный идентификатор товара со слайда
  },
  {
    name: 'Chicken cashew',
    price: 14,
    image: 'chicken_cashew.png',
    id: 'chicken-cashew'
  },
];*/

function initArrows(numberOfSlides, parentElement) {
  const leftArrow = parentElement.querySelector('.carousel__arrow_left');
  const rightArrow = parentElement.querySelector('.carousel__arrow_right');
  const carouselInner = parentElement.querySelector('.carousel__inner');
  const offsetWidth = 988; // todo это хардкод!

  let currentSlide = 0;

  function checkVisibility() {
    if (currentSlide < numberOfSlides - 1 && currentSlide > 0) {
      leftArrow.style.display = '';
      rightArrow.style.display = '';
    } else if (currentSlide === numberOfSlides - 1) {
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
    if (currentSlide < numberOfSlides - 1) {
      currentSlide += 1;
      carouselInner.style.transform = `translateX(-${currentSlide * offsetWidth}px)`;
    }
    checkVisibility();
  });
}

function returnSlide(slide) {
  const htmlString =
    `
        <img src=\"/assets/images/carousel/${slide.image}\" class=\"carousel__img\" alt=\"slide\">
        <div class=\"carousel__caption\">
          <span class=\"carousel__price\">€${slide.price.toFixed(2)}</span>
          <div class=\"carousel__title\">${slide.name}</div>
          <button type=\"button\" class=\"carousel__button\">
            <img src=\"/assets/images/icons/plus-icon.svg\" alt=\"icon\">
          </button>
        </div>
      `;
  const parentDiv = document.createElement('div');
  parentDiv.className = "carousel__slide";
  parentDiv.setAttribute('data-id', slide.name);
  parentDiv.insertAdjacentHTML('beforeend', htmlString);
  const button = parentDiv.querySelector('.carousel__button');
  button.onclick = (event) => {
    event.target.dispatchEvent(new CustomEvent("product-add", {
      detail: slide.id,
      bubbles: true
    }));
  };
  return parentDiv;
}


export default class Carousel {
  constructor(slides) {
    const rootComponentString = `
    <div class="carousel">
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
    </div>
    </div>`;
    const rootDiv = document.createElement('div');
    rootDiv.className = 'carousel';
    rootDiv.insertAdjacentHTML('beforeend', rootComponentString);
    const innerCarousel = rootDiv.querySelector('.carousel__inner'); // это ссылка на компонент, находящийся где-то в другом месте.
    // Поэтому, меняя innerCarousel, мы по факту меняем и другой, родительский компонент. То же самое, что и с document.querySelector и тд. document - глобальный объект
    slides.forEach((slideObj) => innerCarousel.appendChild(returnSlide(slideObj)));
    initArrows(slides.length, rootDiv);
    this.elem = rootDiv;
  }
}
