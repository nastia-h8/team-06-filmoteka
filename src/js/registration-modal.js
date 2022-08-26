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
  rowRef.addEventListener('click', onCloseModalBtn, { once: true });
  window.addEventListener('keydown', modalCloseOnEscPress, { once: true });
}
// ===============================================================
function onCloseModalBtn(event) {
  if (event.target.classList.contains('fa-solid')) {
    modalWindow.classList.add('invis');
  }
  console.log('event.currentTarget', event.currentTarget);
  console.log('event.target', event.target);
}
// ===============================================================
function modalCloseOnEscPress(event) {
  if (event.code !== 'Escape') return;
  modalWindow.classList.add('invis');
}
// ===============================================================
