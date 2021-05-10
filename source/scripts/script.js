'use strict';

// активное состояние тегов
const tagButtonList = document.querySelectorAll('.tags__button');

tagButtonList.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    button.classList.toggle('tags__button_active');
  });
});
