"use strict";

var header = document.querySelector('.header');
var menu = document.querySelector('.menu');
var menuBurger = document.querySelector('.menu__burger');
var menuBurgerActive = document.querySelector('.menu__burger_active');
var menuListSWrap = document.querySelector('.menu__lists-wrap');
var menuListSocial = document.querySelector('.menu__list_type_social');
var searchButton = document.querySelector('.search__button');
var searchOptions = document.querySelector('.search__options');

function toggleMenuBurger() {
  header.classList.toggle('heder_displayed');
  menuBurger.classList.toggle('menu__burger_active');
  menuListSWrap.classList.toggle('menu__lists-wrap_hidden');
  menuListSocial.classList.toggle('menu__list_hidden');
}

function toggleSearchButton() {
  menu.classList.toggle('menu_state_search');
  searchOptions.classList.toggle('search__options_visible');
}

menuBurger.addEventListener('click', toggleMenuBurger);
searchButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggleSearchButton();
});
'use strict'; // активное состояние тегов

var tagButtonList = document.querySelectorAll('.tags__button');
tagButtonList.forEach(function (button) {
  button.addEventListener('click', function (evt) {
    button.classList.toggle('tags__button_active');
  });
});
//# sourceMappingURL=script.js.map
