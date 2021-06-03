const buttonDelete = document.querySelector('.personal-area__button_action_delete-card');
const popupDelete = document.querySelector('.personal');

const ratingButtonGood = document.querySelector('.rating__button_type_good');
const ratingButtonNeutral = document.querySelector('.rating__button_type_neutral');
const ratingButtonBad = document.querySelector('.rating__button_type_bad');
const ratingLabel = document.querySelector('.rating__label');

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

function setRating(button, buttonClass, buttonActiveClass, labelActiveClass, labelText) {
  button.classList.remove(buttonClass);
  button.classList.add(buttonActiveClass);
  ratingLabel.classList.add(labelActiveClass);
  ratingLabel.textContent = labelText;
}

function removeRating(button, buttonClass, buttonActiveClass, labelActiveClass) {
  button.classList.add(buttonClass);
  button.classList.remove(buttonActiveClass);
  ratingLabel.classList.remove(labelActiveClass);
  ratingLabel.textContent = 'Оцените проведенное время';
}

ratingButtonGood.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('rating__button_type_active-good')) {
    removeRating(ratingButtonGood, 'rating__button_type_good', 'rating__button_type_active-good', 'rating__label_type_good');
  } else {
    setRating(ratingButtonGood, 'rating__button_type_good', 'rating__button_type_active-good', 'rating__label_type_good', 'Было классно!');
  }
});

ratingButtonNeutral.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('rating__button_type_active-neutral')) {
    removeRating(ratingButtonNeutral, 'rating__button_type_neutral', 'rating__button_type_active-neutral', 'rating__label_type_neutral');
  } else {
    setRating(ratingButtonNeutral, 'rating__button_type_neutral', 'rating__button_type_active-neutral', 'rating__label_type_neutral', 'Нормально');
  }
});

ratingButtonBad.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('rating__button_type_active-bad')) {
    removeRating(ratingButtonBad, 'rating__button_type_bad', 'rating__button_type_active-bad', 'rating__label_type_bad');
  } else {
    setRating(ratingButtonBad, 'rating__button_type_bad', 'rating__button_type_active-bad', 'rating__label_type_bad', 'Что-пошло не так');
  }
});

buttonDelete.addEventListener('click', () => openPopup(popupDelete));
