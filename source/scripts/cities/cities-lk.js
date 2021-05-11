// открытие попапа с видео
const pupupCity = document.querySelector('.pupup_type_cities');
const changeCityLink = document.querySelector('.personal-area__user-link_type_city');


function openCityPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('click', closeCityPopupByOverlay);
  document.addEventListener('keydown', closeCityPopupByEsc);
}

function closeCityPopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('click', closeCityPopupByOverlay);
  document.removeEventListener('keydown', closeCityPopupByEsc);
}

function closeCityPopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closeCityPopup(popup);
  }
}

function closeCityPopupByOverlay(evt) {
  if(evt.target.classList.contains('popup_opened')) {
    closeCityPopup(pupupCity);
  }
}

changeCityLink.addEventListener('click', () => openCityPopup(pupupCity));
