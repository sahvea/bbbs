//const listMenu = document.querySelector('.menu__list');
const header = document.querySelector('.header');
const listMenuLink = document.querySelectorAll('.menu__link');
const menuBurger = document.querySelector('.menu__burger');
const menuListSWrap = document.querySelector('.menu__lists-wrap');
const menuListSocial = document.querySelector('.menu__list_type_social');

function toggleMenuBurger() {
  header.classList.toggle('heder_displayed');
  menuBurger.classList.toggle('menu__burger_active');
  menuListSWrap.classList.toggle('menu__lists-wrap_hidden');
  menuListSocial.classList.toggle('menu__list_hidden');
  //listMenu.classList.toggle('menu__list_active');

}

menuBurger.addEventListener('click', toggleMenuBurger);

/* listMenuLink.forEach((item) => {
  item.addEventListener('click', toggleMenuBurger);
}); */
