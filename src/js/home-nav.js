const homeLink = document.querySelector('.nav__link.home-link');
const libraryLink = document.querySelector('.nav__link.library-link');
const searchFormBox = document.querySelector('.form-wrapper')
const libraryBox = document.querySelector('.library-box');

homeLink.addEventListener('click', onHomeLinkClick);

function onHomeLinkClick(e) {
    e.preventDefault();

    homeLink.classList.add('nav__link--active');
    libraryLink.classList.remove('nav__link--active');
    homeLink.blur();

    libraryBox.classList.add('hidden');
    searchFormBox.classList.remove('hidden');
}