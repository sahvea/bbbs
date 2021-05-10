const modals = document.querySelectorAll('.popup');
const placeSpan = document.querySelector('.recommendation__span');
const popupRecommend = document.querySelector('.recommendation');
const formRecommend = document.querySelector('.popup_type_recommendation')
const formSubmitButton = document.querySelector('.recommendation__submit');
const popupRecommendFinish = document.querySelector('.popup_type_finish');

function openPopup(popup) {
  formRecommend.reset();
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

(function closePopupByClick() {
  modals.forEach((popup) => {
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

function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight)+"px";
}

function popupAddRecommend(evt) {
  evt.preventDefault();
  closePopup(popupRecommend);
  openPopup(popupRecommendFinish);
}

formSubmitButton.addEventListener('click', popupAddRecommend);
placeSpan.addEventListener('click', () => openPopup(popupRecommend));
