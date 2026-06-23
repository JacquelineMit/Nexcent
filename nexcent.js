const slides = document.querySelectorAll(".hero-section__container");
const buttons = document.querySelectorAll(".slider-bullets__bullet");
for (let index = 0; index < buttons.length; index++) {
  const elements = buttons[index];
  elements.addEventListener("click", function () {
    for (let index = 0; index < buttons.length; index++) {
      slides[index].classList.remove(".slider__item--active");
      buttons[index].classList.remove(".slider-bullets__bullet--active");
      buttons[index].classList.remove(".slider-bullets__bullet--inactive");
    }
    slides[index].classList.add(".slider__item--active");
    buttons[index].classList.add(".slider-bullets__bullet--active");
  });
}
