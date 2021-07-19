import menu from './menu.json';
import menuListTpl from './templates/menu-list.hbs';

const menuLink = document.querySelector('.js-menu');
const changeLink = document.querySelector('#theme-switch-toggle');

// console.dir(changeLink.checked = true);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

menuLink.insertAdjacentHTML('beforeend', createMenuListMarckup(menu));

function createMenuListMarckup(menu){
    return menuListTpl(menu);
}

// console.log(menuListTpl(menu))