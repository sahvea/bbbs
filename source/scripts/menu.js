//const listMenu = document.querySelector(`.menu__list`);
const listMenuLink = document.querySelectorAll(`.menu__link`);
const menuBurger = document.querySelector(`.menu__burger`);

//для попапа календаря
const popupCalendar = document.querySelector('.popup');
const popupCalendarButtonClose = document.querySelector('.popup__close');
const buttonDots = document.querySelectorAll('.button_type_button-dots');

function openPopup() {
  popupCalendar.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popupCalendar) {
  popupCalendar.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

(function closePopupByClick() {
  popupCalendar.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('popup_opened')) {
      closePopup(popupCalendar);
    }
    if(evt.target.classList.contains('popup__close')) {
      closePopup(popupCalendar);
    }
  })
})();

function closePopupByEsc(evt) {
  if(evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

for (let i=0; i < buttonDots.length; i++) {
  buttonDots[i].addEventListener('click', function() {
    openPopup();
  });
}

function toggleMenuBurger() {
  menuBurger.classList.toggle(`menu__burger_active`);
  //listMenu.classList.toggle(`menu__list_active`);
}

menuBurger.addEventListener(`click`, toggleMenuBurger);

/* listMenuLink.forEach((item) => {
  item.addEventListener(`click`, toggleMenuBurger);
}); */
