/** start Слайдер */
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
/** end Слайдер */

/** start Кнопка скролла */
const scroll_btn = document.querySelector(".scroll-btn");
scroll_btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
/** end Кнопка скролла */

/** start Шапка */
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
/** end Шапка */

/** start Модалка */
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("register-btn");
const closeModalBtn = document.getElementById("modal-close");
const openModalBtnMenu = document.getElementById("register-btn-menu");

function openModal() {
  const modal = document.getElementById("modal");
  modal.showModal();
}
function closeModal() {
  const modal = document.getElementById("modal");
  modal.close();
}

if (openModalBtn) {
  openModalBtn.addEventListener("click", openModal);
  openModalBtnMenu.addEventListener("click", openModal);
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeModal);
}
/** end Модалка */

/** start Валидация в модалке */
const registerBtn = document.getElementById("modal-btn");
registerBtn.addEventListener("click", function () {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const nameEl = document.getElementById("your-name");
  const value = nameEl.value.trim();
  const emailEl = document.getElementById("your-email");
  const valueEmail = emailEl.value.trim();

  if (isNameValid && isEmailValid) {
    sendUser(value, valueEmail);
    alert("Validation was successful!");
  }
});

const MESSAGES = {
  name: {
    tooShort: "Your name is small!",
    tooLong: "Your name is big!",
    required: "",
  },
  email: {
    required: "Please enter your email!",
    invalid: "Incorrect email format!",
  },
};

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
  let errorName = "";

  if (value.length === 0) {
    errorName = MESSAGES.email.required;
    emailEl.classList.add("invalid");
  } else if (!emailRegex.test(value)) {
    errorName = MESSAGES.email.invalid;
    emailEl.classList.add("invalid");
  } else {
    emailEl.classList.remove("invalid");
  }

  errorTextEl.classList.add("error-text--active");
  errorTextEl.innerText = errorName;

  const isValid = errorName === "";
  return isValid;
}
/** start Валидация в модалке  */

const btnMenu = document.getElementById("Header__Button");
const btnOffMenu = document.getElementById("Button__menu");
const menu = document.getElementById("Menu");
btnMenu.addEventListener("click", function () {
  menu.setAttribute("aria-hidden", "false");
});

btnOffMenu.addEventListener("click", function () {
  menu.setAttribute("aria-hidden", "true");
});

/**
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

let val = [beez1, beez2];
const TEST_DATA = "somes".repeat(4);
let val2 = val.reduce(function (acc, value) {
  if (acc == false) {
    return false;
  }

  return value(TEST_DATA);
}, true);
console.log(`--> validation for '${TEST_DATA}'  was`, val2);

const minLength = (value) => value.length > 2 || "ERROR";
const maxLength = (value) => value.length < 100 || "ERROR";
const nameRules = [minLength, maxLength];

function validate(value, ...rules) {
  return rules.reduce(function (result, rule) {
    if (typeof result == "string") {
      return result;
    } else {
      return rule(value);
    }
  }, true);
}

const value = validate(
  "some str",
  (value) => value.length > 2 || "ERROR",
  (value) => value.length < 100 || "ERROR",
);
**/
const url = "http://localhost:3000/health";
function getData() {
  fetch(url);
}

getData();

function sendUser(name, email) {
  fetch("http://localhost:3000/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  });
}

sendUser("aleks", "kfkfkffk");
