// language
const openPlus = document.querySelector('.plus-wndw');
const ukrainian = document.querySelector('.ua');
const english = document.querySelector('.en');
const languageSwitcher = document.querySelector('.switchcontent');
languageSwitcher.addEventListener('click', () => {
    ukrainian.classList.toggle('en_active');
});