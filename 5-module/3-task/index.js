function initCarousel() {
  const leftArrow = document.querySelector('.carousel__arrow_left');
  const rightArrow = document.querySelector('.carousel__arrow_right');
  const carouselInner = document.querySelector('.carousel__inner');
  const slideWidth = carouselInner.offsetWidth;
  let allSlide = document.querySelectorAll('.carousel__slide');
  let position = 0;

  const scrollLeft = () => {
    position += slideWidth;
		carouselInner.style.transform = `translateX(-${position}px)`;
    hideArrow();
  }

  const scrollRight = () => {
    position -= slideWidth;
		carouselInner.style.transform = `translateX(${position}px)`;
    console.log(position);
    hideArrow();
  }

  const hideArrow = () => {
    (position === -slideWidth * (allSlide.length - 1)) ? rightArrow.style.display = 'none' : rightArrow.style.display = '';
		position === 0 ? leftArrow.style.display = 'none' : leftArrow.style.display = '';
  }

  leftArrow.style.display = 'none';

  leftArrow.addEventListener('click', scrollLeft);
  rightArrow.addEventListener('click', scrollRight);
}
