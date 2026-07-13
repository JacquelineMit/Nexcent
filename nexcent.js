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

const scrolls = document.getElementById("scroll-btn");
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  const pageHeight = window.innerHeight;
  if (
    document.body.scrollTop > pageHeight ||
    document.documentElement.scrollTop > pageHeight
  ) {
    header.classList.add("header--active");
    scrolls.classList.add("scroll--active");
  } else {
    header.classList.remove("header--active");
    scrolls.classList.remove("scroll--active");
  }
});

const button_in = document.querySelector("register-btn");
const button_off = document.querySelector(".modal__btn");
