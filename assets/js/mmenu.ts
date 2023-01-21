import Menu from 'mmenu-js';
import 'mmenu-js/dist/mmenu.css';

const menuElement = document.querySelector<HTMLElement>('.js-mobile-menu');
const menuTriggerElement = document.querySelector<HTMLElement>(
  '.js-mobile-menu-trigger'
);
if (menuElement && menuTriggerElement) {
  const menu = new Menu(menuElement, {
    navbar: {
      title: 'Меню',
    },
    "offCanvas": {
      "position": "right"
    },
  });
  menuTriggerElement.addEventListener('click', () => {
    menu.open();
  });
}
