const logInButtonRef = document.querySelector('.auth-btn');
const modalWindow = document.querySelector('.container__form');
const backDropRef = document.querySelector('.backdrop');
const closeModalBtnRef = document.querySelector('.fa-solid');
// ===============================================================
// ===============================================================
logInButtonRef.addEventListener('click', onLoginBtnClick);
// ===============================================================
function onLoginBtnClick() {
  modalWindow.classList.remove('invis');
  window.addEventListener('click', onCloseModalBtn);
}
// ===============================================================
function onCloseModalBtn(event) {
  if (event.target.classList.contains('fa-solid')) {
    modalWindow.classList.add('invis');
    console.log(event);
  }
}
// ===============================================================
