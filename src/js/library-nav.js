const homeLink = document.querySelector('.nav__link.home-link');
const libraryLink = document.querySelector('.nav__link.library-link');
const searchFormBox = document.querySelector('.form-wrapper');
const libraryBox = document.querySelector('.library-box');
const watchedBtn = document.querySelector('#watched-btn');
const queueBtn = document.querySelector('#queue-btn');

libraryLink.addEventListener('click', onLibraryLinkClick);
watchedBtn.addEventListener('click', onLibraryBtnsClick);
queueBtn.addEventListener('click', onLibraryBtnsClick);


function onLibraryLinkClick(e) {
    e.preventDefault();
    homeLink.classList.remove('nav__link--active');
    libraryLink.classList.add('nav__link--active');
    libraryLink.blur();

    libraryBox.classList.remove('hidden');
    searchFormBox.classList.add('hidden');
}

function onLibraryBtnsClick(e) {
    e.preventDefault();
    watchedBtn.classList.toggle('accent-btn');
    queueBtn.classList.toggle('accent-btn');
}