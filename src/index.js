import menu from './menu.json';
import menuListTpl from './templates/menu-list.hbs';

const menuLink = document.querySelector('.js-menu');
const changeLink = document.querySelector('#theme-switch-toggle');
const bodylink = document.querySelector('body');

menuLink.insertAdjacentHTML('beforeend', createMenuListMarckup(menu));

changeLink.addEventListener('change', changeTheme);

function createMenuListMarckup(menu){
    return menuListTpl(menu);
}

changeTheme ();

function changeTheme () {
  const themeThis = localStorage.getItem('theme');

  if(!themeThis){
    if(!changeLink.checked) {
      localStorage.setItem('theme', 'light-theme');
    } else {
      localStorage.setItem('theme', 'dark-theme');
    }

    themeThis === 'light-theme' ? changeLink.checked = false : changeLink.checked = true;
  } else {
    if(changeLink.checked){
      localStorage.removeItem('theme');
      localStorage.setItem('theme', 'dark-theme');
     } else {
      localStorage.removeItem('theme');
      localStorage.setItem('theme', 'light-theme');
    }
}

  if(!changeLink.checked) {
    bodylink.classList.remove('dark-theme')
    bodylink.classList.add('light-theme');
  } else {
    bodylink.classList.remove('light-theme')
    bodylink.classList.add('dark-theme');
  }
}