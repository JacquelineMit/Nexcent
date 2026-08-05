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

const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("register-btn");
const closeModalBtn = document.getElementById("modal-close");

if (openModalBtn) {
  openModalBtn.addEventListener("click", () => {
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  });
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", () => {
    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }
  });
}

const registerBtn = document.getElementById("modal-btn");
registerBtn.addEventListener("click", function () {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  if (isNameValid && isEmailValid) {
    alert("Validation was successful!");
  }
});

function validateName() {
  const nameEl = document.getElementById("your-name");
  const value = nameEl.value.trim();
  const length = value.length;
  const errorTextEl = document.getElementById("error-text");

  let errorName = "";
  if (length <= 2) {
    errorName = "*Error! Your name is small!";
    nameEl.classList.add("invalid");
  } else if (length >= 100) {
    errorName = "*Error! Your name is big!";
    nameEl.classList.add("invalid");
  } else {
    nameEl.classList.remove("invalid");
  }

  errorTextEl.classList.add("error-text--active");
  errorTextEl.innerText = errorName;

  const isValid = errorName === "";
  return isValid;
}

function validateEmail() {
  const emailEl = document.getElementById("your-email");
  const errorTextEl = document.getElementById("error-text-email");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const value = emailEl.value.trim();
  let errorNoneName = "*Please enter your email!";
  let errorIncorrect = "*Incorrect email format!";
  let errorName = "";

  if (value.length === 0) {
    errorName = errorNoneName;
    emailEl.classList.add("invalid");
  } else if (!emailRegex.test(value)) {
    errorName = errorIncorrect;
    emailEl.classList.add("invalid");
  } else {
    emailEl.classList.remove("invalid");
  }

  errorTextEl.classList.add("error-text--active");
  errorTextEl.innerText = errorName;

  const isValid = errorName === "";
  return isValid;
}

const btnMenu = document.getElementById("Header__Button");
const btnOffMenu = document.getElementById("Button__menu");
const menu = document.getElementById("Menu");
btnMenu.addEventListener("click", function () {
  menu.setAttribute("aria-hidden", "false");
});

btnOffMenu.addEventListener("click", function () {
  menu.setAttribute("aria-hidden", "true");
});

// (тырнет в помощь)
// !!1. сделать валидацию почты с помощью RegExp
// !!2. сделать alert() с текстом при прохождении валидации
// !!3. сделать рамку поля красным для каждого поля, если валидация провалена
// !!4. Вынести тексты ошибок в объекты и использовать вместо строк в самом коде
// *5. Использовать люые средства для создания модалки (библиотеки или <dialog>)
// !!*6. Начать делать адаптацию (сделать хотя бы одну секцию)

// WRITE YOUR CODE HERE

/*
const value = ["here", "trim", "beez"];
value.forEach((value, index, array) => {
  console.log(value, index, array);
});
let a = value.map((value) => {
  console.log(value);
  return value.length;
});
console.log(a);

let mas = [
  function () {
    console.log("1");
  },
  function () {
    console.log("2");
  },
  function () {
    console.log("3");
  },
];
mas.forEach(function iter(value) {
  value();
});

let num = [1, 2, 3];
let Num = num.reduce(function (accumulator, value) {
  console.log({ accumulator, value });
  return accumulator + value;
}, 0);

function beez1(string) {
  return string.length > 0;
}
function beez2(string) {
  return string.length <= 20;
}

let val = [
  beez1,
  beez2,
];
const TEST_DATA = "somes".repeat(4);
let val2 = val.reduce(function (acc, value) {
  if (acc == false) {
    return false;
  }

  return value(TEST_DATA);
}, true);
console.log(`--> validation for '${TEST_DATA}'  was`, val2);

const button_in = document.getElementById("register-btn");
const button_off = document.querySelector(".modal__btn");
const modal = document.querySelector(".modal");
button_in.addEventListener("click", function () {
  modal.setAttribute("aria-hidden", "false");
});

button_off.addEventListener("click", function () {
  modal.setAttribute("aria-hidden", "true");
});
*/
