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

const button_in = document.getElementById("register-btn");
const button_off = document.querySelector(".modal__btn");
const modal = document.querySelector(".modal");
button_in.addEventListener("click", function () {
  modal.setAttribute("aria-hidden", "false");
});

button_off.addEventListener("click", function () {
  modal.setAttribute("aria-hidden", "true");
});

const registerBtn = document.getElementById("modal-btn");
registerBtn.addEventListener("click", function () {
  validateName();
  validateEmail();
});

function validateName() {
  const nameEl = document.getElementById("your-name");
  const length = nameEl.value.length;
  const errorTextEl = document.getElementById("error-text");

  let errorName = "";
  if (length <= 2) {
    errorName = "*Error! Your name is small";
    nameEl.classList.add("invalid");
  } else if (length >= 100) {
    errorName = "*Error! Your name is big";
    nameEl.classList.add("invalid");
  } else {
    alert("Валидация пройдена! Данные корректны.");
  }

  errorTextEl.classList.add("error-text--active");
  errorTextEl.innerText = errorName;
}

function validateEmail() {
  const emailEl = document.getElementById("your-email");
  const errorTextEl = document.getElementById("error-text-email");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const value = emailEl.value.trim();

  let errorName = "";
  if (value.length === 0) {
    errorName = "Пожалуйста, введите адрес электронной почты.";
    emailEl.classList.add("invalid");
  } else if (!emailRegex.test(value)) {
    errorName = "Неверный формат электронной почты.";
    emailEl.classList.add("invalid");
  } else {
    alert("Валидация пройдена! Данные корректны.");
  }
  errorTextEl.classList.add("error-text--active");
  errorTextEl.innerText = errorName;
}

// 1. !!сделать валидацию почты с помощью RegExp (тырнет в помощь)
// 2. !!сделать alert() с текстом при прохождении валидации
// 3. !!сделать рамку поля красным для каждого поля, если валидация провалена
// 4. Вынести тексты ошибок в объекты и использовать вместо строк в самом коде
// *5. Подключить и использовать библиотеку micromodal или использовать нативный тег <dialog>
// *6. Начать делать адаптацию (сделать хотя бы одну секцию)
