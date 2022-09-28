const plusOpenOn = document.querySelector('.plusOpen');
const openPlus = document.querySelector('.plus-wndw');




plusOpenOn.addEventListener('click', () => {
    openPlus.classList.toggle('wnd_active');
});


const navRemove = document.querySelector('.navRemove');
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.list');
const header = document.querySelector('.header');
menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('menu_active');
});
menuIcon.addEventListener('click', () => {
    header.classList.toggle('headerChange');
});


