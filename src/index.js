import menu from './menu.json';
import menuListTpl from './templates/menu-list.hbs';

const menuLink = document.querySelector('.js-menu');
const changeLink = document.querySelector('#theme-switch-toggle');
const bodylink = document.querySelector('body');

menuLink.insertAdjacentHTML('beforeend', createMenuListMarckup(menu));

changeLink.addEventListener('change', changeTheme);

startTheme ();
changeTheme ();

function createMenuListMarckup(menu){
  return menuListTpl(menu);
}

function startTheme () {
  const themeThis = localStorage.getItem('theme');

  if(!themeThis) {
      localStorage.setItem('theme', 'light-theme');
      bodylink.classList.add('light-theme');
      changeLink.checked = false;   
  } else if (themeThis === 'light-theme') {
      bodylink.classList.add('light-theme');
      changeLink.checked = false;
  } else if (themeThis === 'dark-theme') {
      bodylink.classList.add('dark-theme');
      changeLink.checked = true;
    }
}

function changeTheme (e) {
  if(e.target.checked) {
      localStorage.removeItem('theme');
      localStorage.setItem('theme', 'dark-theme');
      bodylink.classList.remove('light-theme');
      bodylink.classList.add('dark-theme');
  } else {
      localStorage.removeItem('theme');
      localStorage.setItem('theme', 'light-theme');
      bodylink.classList.remove('dark-theme');
      bodylink.classList.add('light-theme');
  }
}



