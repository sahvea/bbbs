//const listMenu = document.querySelector(`.menu__list`);
const listMenuLink = document.querySelectorAll(`.menu__link`);
const menuBurger = document.querySelector(`.menu__burger`);

function toggleMenuBurger() {
  menuBurger.classList.toggle(`menu__burger_active`);
  //listMenu.classList.toggle(`menu__list_active`);
}

menuBurger.addEventListener(`click`, toggleMenuBurger);

/* listMenuLink.forEach((item) => {
  item.addEventListener(`click`, toggleMenuBurger);
}); */
