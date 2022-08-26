const logInButtonRef = document.querySelector('.auth-btn');
const modalWindow = document.querySelector('.container__form');
const rowRef = document.querySelector('.row');
const backDropRef = document.querySelector('.backdrop');
const closeModalBtnRef = document.querySelector('.fa-solid');
// ===============================================================
// ===============================================================
logInButtonRef.addEventListener('click', onLoginBtnClick);
// ===============================================================
function onLoginBtnClick() {
  modalWindow.classList.remove('invis');
  window.addEventListener('keydown', modalCloseOnEscPress);
  modalWindow.addEventListener('click', onCloseModalBtn);
}
// ===============================================================
// ===============================================================
function onCloseModalBtn(event) {
  if (
    event.target.classList.contains('fa-solid') ||
    event.target === event.currentTarget
  ) {
    modalWindow.classList.add('invis');
    window.removeEventListener('keydown', modalCloseOnEscPress);
    modalWindow.removeEventListener('click', onCloseModalBtn);
  }
}
// ===============================================================
function modalCloseOnEscPress(event) {
  if (event.code !== 'Escape') return;
  modalWindow.classList.add('invis');
}
// ===============================================================
