const searchFormBox = document.querySelector('.form-wrapper');
const libraryBox = document.querySelector('.library-box');
const watchedBtn = document.querySelector('#watched-btn');
const queueBtn = document.querySelector('#queue-btn');


if (watchedBtn) {
    watchedBtn.addEventListener('click', onWatchedBtnClick);
}

if (queueBtn) {
        queueBtn.addEventListener('click', onQueueBtnClick); 
}


function onWatchedBtnClick(e) {
    e.preventDefault();
    watchedBtn.classList.add('accent-btn');
    queueBtn.classList.remove('accent-btn');
}


function onQueueBtnClick(e) {
    e.preventDefault();
    watchedBtn.classList.remove('accent-btn');
    queueBtn.classList.add('accent-btn');
}
