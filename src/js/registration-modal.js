const logInButtonRef = document.querySelector('.auth-btn');
const modalWindow = document.querySelector('.container__form');
// ===============================================================
console.log('modalWindow: ', modalWindow);
console.log('logInButtonRef: ', logInButtonRef);
// ===============================================================
logInButtonRef.addEventListener('click', onLoginBtnClick);
// ===============================================================
function onLoginBtnClick() {
  modalWindow.classList.toggle('invis');
  console.log('message');
}
// ===============================================================
