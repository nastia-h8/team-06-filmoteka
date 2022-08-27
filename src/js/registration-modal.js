const logInButtonRef = document.querySelector('.auth-btn');
const modalWindow = document.querySelector('.container__form');
const rowRef = document.querySelector('.row');
const backDropRef = document.querySelector('.backdrop');
const closeModalBtnRef = document.querySelector('.fa-solid');
const checkBoxRef = document.querySelector('.form-check-input');
const formButtonRef = document.querySelector('.btn-primary');
const formRef = document.querySelector('form');
// ===============================================================
formButtonRef.disabled = true;
// ===============================================================
logInButtonRef.addEventListener('click', onLoginBtnClick);
checkBoxRef.addEventListener('change', onToggle);
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
function onToggle(event) {
  if (this.checked) {
    console.log('Checkbox is checked..');
    formButtonRef.disabled = false;
    formButtonRef.style.border = '1px black solid';
  } else {
    console.log('Checkbox is not checked..');
    formButtonRef.disabled = true;
    formButtonRef.style.border = '1px var(--tertiary-color) solid';
  }
}
// ===============================================================
