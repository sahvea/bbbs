const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuBurger = document.querySelector('.menu__burger');
const menuListSWrap = document.querySelector('.menu__lists-wrap');
const menuListSocial = document.querySelector('.menu__list_type_social');
const searchButton = document.querySelector('.search__button');
const searchOptions = document.querySelector('.search__options');

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
searchButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  toggleSearchButton();
});

