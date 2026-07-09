// Находим элементы
const slides = document.querySelectorAll(".slides");
const buttons = document.querySelectorAll(".slider-bullets__bullet");

// Добавляем обработчик для каждой кнопки
for (let index = 0; index < buttons.length; index++) {
  const elements = buttons[index];
  elements.addEventListener("click", function () {
    // Делаем все элементы скрытыми
    for (let index = 0; index < buttons.length; index++) {
      slides[index].classList.remove("slides--active");
      buttons[index].classList.remove("slider-bullets__bullet--active");
    }

    // Отображаем целевой элемент
    slides[index].classList.add("slides--active");
    buttons[index].classList.add("slider-bullets__bullet--active");
  });
}

const scroll_btn = document.querySelector(".scroll-btn");
scroll_btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const scrolls = document.querySelector(".scroll");
window.addEventListener("scroll", function () {
  const pageHeight = window.innerHeight;
  if (
    document.body.scrollTop > pageHeight ||
    document.documentElement.scrollTop > pageHeight
  ) {
    scrolls.classList.add("scroll--active");
  } else {
    scrolls.classList.remove("scroll--active");
  }
});
