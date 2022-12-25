/*==========================================================================================================================================================================*/
/* Menu Burger */
if (document.querySelector(".header-burger")) {
  let delay = 500;
  let unlock = true;
  let menuBody = document.querySelector(".header-menu");
  let iconMenu = document.querySelector(".header-burger");

  iconMenu.addEventListener("click", function (e) {
    if (document.documentElement.classList.contains("_menu-open")) {
      bodyUnLock(unlock, false, delay);
      menuClose(menuBody, iconMenu);
    } else {
      bodyLock(unlock, false, delay);
      menuOpen(menuBody, iconMenu);
    }
  });
};


function menuOpen(menuBody, iconMenu) {
  document.documentElement.classList.add("_menu-open");
  menuBody.classList.add("_open");
  iconMenu.classList.add("_close");
}

function menuClose(menuBody, iconMenu) {
  document.documentElement.classList.remove("_menu-open");
  menuBody.classList.remove("_open");
  iconMenu.classList.remove("_close");
}

/*  =================== Fsixed Header ======================= */
const header = document.querySelector(".header");
const btnScroll = document.querySelector('.btn-scroll')
let scrollPrev = 0;

window.addEventListener('scroll', function (e) {
  let scrolled = window.pageYOffset;

  if (scrolled > 100 && scrolled > scrollPrev) {
    header.classList.add('_fixed');
  } else {
    header.classList.remove('_fixed');
  }
  if (scrolled > 200 && scrolled > scrollPrev) {
    btnScroll.classList.add('_fixed');
  } else {
    btnScroll.classList.remove('_fixed');
  }
})

/*   =================== Popup  =================== */
const popupLinks = document.querySelectorAll("[data-popup]");
const popupLinksClose = document.querySelectorAll(".popup__close");

const popupLinksID = document.querySelectorAll("[data-popup-id]");
const popupLinksImage = document.querySelectorAll("[data-popup-image]");

if (popupLinksImage) {
  popupLinksImage.forEach(elem => {
    elem.addEventListener("click", function (e) {
      removeActiveClassesParent(popupLinksImage, "_active");
      elem.parentElement.classList.add("_active");
      let ifreameHtml = e.target.getAttribute("data-image")
      document.querySelector('.popup .image__body').innerHTML = `<img src="${ifreameHtml}" alt="">`


      let delay = 500;
      let unlock = true;
      const targetBlockElement = document.querySelector('#imagePopup');
      if (targetBlockElement) {
        targetBlockElement.classList.add('show')
        bodyLock(unlock, false, delay);
      } else {
        console.log(`[popupBlock]:  Нет модального окна на странице: ${targetBlock}`);
      }
    });
  });
}

if (popupLinksID) {
  popupLinksID.forEach(elem => {
    elem.addEventListener("click", function (e) {
      removeActiveClassesParent(popupLinksID, "_active");
      elem.parentElement.classList.add("_active");
      let ifreameHtml = document.querySelector('.feedbacks-video._active .feedbacks-video-code').innerHTML
      document.querySelector('.popup .video__body').innerHTML = ifreameHtml


      let delay = 500;
      let unlock = true;
      const targetBlockElement = document.querySelector('#videoPopup');
      if (targetBlockElement) {
        targetBlockElement.classList.add('show')
        bodyLock(unlock, false, delay);
      } else {
        console.log(`[popupBlock]:  Нет модального окна на странице: ${targetBlock}`);
      }
    });
  });
}
function removeActiveClassesParent(array, className) {
  for (let i = 0; i < array.length; i++) {
    array[i].parentElement.classList.remove(className);
  }
}

if (popupLinks) {
  popupLinks.forEach(elem => {
    elem.addEventListener("click", popupBlock);
  });
}

if (popupLinksClose) {
  let delay = 500;
  let unlock = true;
  popupLinksClose.forEach(elem => {
    elem.addEventListener("click", function () {
      bodyUnLock(unlock, false, delay);
      elem.closest('.popup').classList.remove('show')
    });
  });
}

function popupBlock(e) {
  let delay = 500;
  let unlock = true;
  const targetBlock = e.target.getAttribute("data-popup");
  const targetBlockElement = document.querySelector(targetBlock);
  removeActiveClasses(popupLinks, "_active");
  e.target.classList.add("_active");
  if (targetBlockElement) {
    targetBlockElement.classList.add('show')
    bodyLock(unlock, false, delay);
    document.documentElement.classList.add("_popup-open");
  } else {
    console.log(`[popupBlock]:  Нет модального окна на странице: ${targetBlock}`);
  }
};

/*   =================== Плавная прокрутка к блоку  =================== */
const menuLinks = document.querySelectorAll("[data-goto]");
if (menuLinks) {
  menuLinks.forEach(elem => {
    elem.addEventListener("click", gotoBlock);
  });
}


function gotoBlock(e) {
  const targetBlock = e.target.getAttribute("data-goto");
  const targetBlockElement = document.querySelector(targetBlock);
  removeActiveClasses(menuLinks, "_active");
  e.target.classList.add("_active");
  if (targetBlockElement) {
    // Прокрутка:
    window.scrollTo({
      top: targetBlockElement.getBoundingClientRect().top + window.scrollY,
      behavior: "smooth",
    });
    e.preventDefault();
  } else {
    console.log(`[gotoBlock]: Такого блока нет на странице: ${targetBlock}`);
  }
};


function removeActiveClasses(array, className) {
  for (let i = 0; i < array.length; i++) {
    array[i].classList.remove(className);
  }
}
/*==========================================================================================================================================================================*/
/* Скрытие, блокировка и разблокировка скролла */
function bodyLock(unlock, lockPadding, delay = 500) {
  const lockPaddingValue = window.innerWidth - document.querySelector(".page").offsetWidth + "px";
  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const elem = lockPadding[index];
      elem.style.paddingRight = lockPaddingValue;
    }
  }
  document.body.style.paddingRight = lockPaddingValue;
  document.body.classList.add("_lock");
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, delay);
}


function bodyUnLock(unlock, lockPadding, delay = 500) {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const elem = lockPadding[index];
        elem.style.paddingRight = "0px";
      }
    }
    document.body.style.paddingRight = "0px";
    document.body.classList.remove("_lock");
  }, delay);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, delay);
}

// Slider. Специалисты:
if (document.querySelector(".expert-slider")) {
  new Swiper(".expert-slider", {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    breakpoints: {
      619: {
        slidesPerView: 2
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    navigation: {
      nextEl: '.expert-slider__btn--next',
      prevEl: '.expert-slider__btn--prev',
    },
  });
}
// Slider. Видео-отзывы:
if (document.querySelector("._slider-video")) {
  new Swiper("._slider-video", {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 38,
    speed: 1000,
    breakpoints: {
      619: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    navigation: {
      nextEl: '.video-slider__btn--next',
      prevEl: '.video-slider__btn--prev',
    },
  });
}
// Slider. Видео-отзывы:
if (document.querySelector("._slider-text")) {
  new Swiper("._slider-text", {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 70,
    speed: 1000,
    breakpoints: {
      619: {
        slidesPerView: 2
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    navigation: {
      nextEl: '.text-slider__btn--next',
      prevEl: '.text-slider__btn--prev',
    },
  });
}

/*==========================================================================================================================================================================*/
/* Маска для телефона */
function validatePhone() {
  let phoneInputs = document.querySelectorAll("._tel");
  [].forEach.call(document.querySelectorAll("._tel"), function (input) {
    let keyCode;


    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___) ___ ____";
      let i = 0;
      let def = matrix.replace(/\D/g, "");
      let val = this.value.replace(/\D/g, "");
      let new_value = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
      });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}"
      }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }


    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
};
validatePhone();

/*==========================================================================================================================================================================*/
/* Валидация Формы */
let forms = document.querySelectorAll("._form");
let form;
for (let i = 0; i < forms.length; i++) {
  form = forms[i];
  form.addEventListener("submit", formSend);
}


// Функция проверки и обработки результатов валидации формы:
async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);
  let formData = new FormData(form);
  if (error === 0) {
    inputRemoveError();
    document.querySelector('.req-form').classList.remove('_error')
    let response = await fetch("form.php", {
      method: "POST",
      body: formData
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      formPreview.innerHTML = "";
      form.reset();
      // document.querySelector(".popup-message").classList.add("_show");
      // let buttonPopup = document.querySelector(".popup-message__button");
      // buttonPopup.addEventListener("click", function (e) {
      //   this.closest(".popup-message").classList.remove("_show");
      // });
    } else {
      if (form.classList.contains("form__body")) {
        document.querySelector(".input").classList.remove("_error");
      } else {
        document.querySelector(".input").classList.remove("_error");
      }
      alert("Ошибка отправки");
    }
  } else {
    document.querySelector('.req-form').classList.add('_error')
  }
}

// Функция валидации формы:
function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll("._req");
  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);
    if (input.classList.contains("_tel")) {
      console.log(input.value.length);
      if (input.value.length !== 17) {
        formAddError(input);
        error++;
      }
    }
    if (input.value === "") {
      formAddError(input);
      error++;
    }
    if (input.getAttribute("type") === "checkbox" && input.checked === false) {
      formAddError(input);
      error++;
    }
  }
  return error;
}

// Функция добавления полю ввода и его родителю класса "_error" (ошибка):
function formAddError(input) {
  input.parentElement.classList.add("_error");
  input.classList.add("_error");
}
// Функция удаления у поля ввода и его родителя класса "_error" (ошибка):
function formRemoveError(input) {
  input.parentElement.classList.remove("_error");
  input.classList.remove("_error");
}
