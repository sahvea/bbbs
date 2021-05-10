// открытие попапа с видео
const videoPopup = document.querySelector('.popup_type_video');
const videoImages = document.querySelectorAll('.video__img');
const videoLinks = document.querySelectorAll('.link_action_open-video');


function openVideoPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('click', closeVideoPopupByOverlay);
  document.addEventListener('keydown', closeVideoPopupByEsc);
}

function closeVideoPopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('click', closeVideoPopupByOverlay);
  document.removeEventListener('keydown', closeVideoPopupByEsc);
}

function closeVideoPopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closeVideoPopup(popup);
  }
}

function closeVideoPopupByOverlay(evt) {
  if(evt.target.classList.contains('popup_opened')) {
    closeVideoPopup(videoPopup);
  }
}

videoImages.forEach((img) => {
  img.addEventListener('click', () => openVideoPopup(videoPopup));
});
videoLinks.forEach((link) => {
  link.addEventListener('click', () => openVideoPopup(videoPopup));
});
