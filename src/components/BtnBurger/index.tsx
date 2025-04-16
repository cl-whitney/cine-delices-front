const btnElement = document.querySelector('.btnBurger') as HTMLDivElement;
const btnListElement = document.querySelector('.header__nav_list');

btnElement.addEventListener('click', () => {
  btnListElement.classList.toggle('toggle');
});

const hideHomeElement = document.querySelector('.nav__menu_home');

if (window.location.pathname === '/') {
  hideHomeElement.style.display = 'none';
}
