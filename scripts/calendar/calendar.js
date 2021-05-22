const popupCalendar = document.querySelector('.popup_type_description');
const popupConfirm = document.querySelector('.popup_type_confirmation');
const popupDone = document.querySelector('.popup_type_done');
const popups = document.querySelectorAll('.popup');
const popupCalendarButtonClose = document.querySelector('.popup__close');
const buttonDots = document.querySelectorAll('.calendar__button-dots');
const buttonConfirm = document.querySelector('.button_action_confirm');
const buttonDone = document.querySelector('.calendar__confirm');
const buttonsCalendar = document.querySelectorAll('.calendar__button_action_sign-up');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

function openConfirmPopup() {
  closePopup(popupCalendar);
  openPopup(popupConfirm);
}

function openDonePopup() {
  closePopup(popupConfirm);
  openPopup(popupDone);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

(function closePopupByClick() {
  popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup_opened')) {
        closePopup(popup);
      }
      if(evt.target.classList.contains('popup__cancel')) {
        closePopup(popup);
      }
    })
  })
})();

function closePopupByEsc(evt) {
  if(evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

buttonConfirm.addEventListener('click', openConfirmPopup);
buttonDone.addEventListener('click', openDonePopup);
buttonsCalendar.forEach((item) => item.addEventListener('click', () => openPopup(popupConfirm)));
buttonDots.forEach((dot) => dot.addEventListener('click', () => openPopup(popupCalendar)));
