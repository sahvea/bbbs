const buttonDelete = document.querySelector('.personal-area__delete');
const popupDelete = document.querySelector('.personal');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

function closePopupByEsc(evt) {
  if(evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

(function closePopupByClick() {
  popupDelete.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup_opened')) {
        closePopup(popupDelete);
      }
      if(evt.target.classList.contains('popup__cancel')) {
        closePopup(popupDelete);
      }
    })
})();

buttonDelete.addEventListener('click', () => openPopup(popupDelete));
