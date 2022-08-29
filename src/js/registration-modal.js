import Notiflix from 'notiflix';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

// ==================firebaseConfig===============================
const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyBwIHbipBLGGO3rbF9X_3hWkD1LKg_9nto',
  authDomain: 'filmoteka-auth-d1821.firebaseapp.com',
  projectId: 'filmoteka-auth-d1821',
  storageBucket: 'filmoteka-auth-d1821.appspot.com',
  messagingSenderId: '528877394896',
  appId: '1:528877394896:web:a8dabe5ad1904b525c77d5',
});
// ===============================================================
const auth = getAuth(firebaseConfig);
// ===============================================================
const user = auth.currentUser;
// ===============================================================
const logInButtonRef = document.querySelector('.auth-btn');
const logOutButtonRef = document.querySelector('.logout__btn');
const modalWindow = document.querySelector('.container__form');
const rowRef = document.querySelector('.row');
const backDropRef = document.querySelector('.backdrop');
const closeModalBtnRef = document.querySelector('.fa-solid');
const checkBoxRef = document.querySelector('.form-check-input');
const formButtonSignUpRef = document.querySelector('.btn__signup');
const formButtonLogInRef = document.querySelector('.btn__login');
const formRef = document.querySelector('.form');
let firstPassInputRef = document.querySelector('#firstPass');
const repeatPassInputRef = document.querySelector('#repeatedPass');
const userNameInputRef = document.querySelector('#userName');
let userEmailInputRef = document.querySelector('#userEmail');
const loginLinkRef = document.querySelector('.login__link');
const libraryLinkRef = document.querySelector('.library-link');
// ===============================================================
libraryLinkRef.addEventListener('click', onLibraryLinkClick);
formButtonSignUpRef.disabled = true;
// ===============================================================
function checkLocalStorage() {
  if (localStorage.getItem('userData')) {
    const restoredUserData = JSON.parse(localStorage.getItem('userData'));
    const { userEmail, userPassword } = restoredUserData;
    loginIntoAccount(auth, userEmail, userPassword);
  }
}
checkLocalStorage();
// ===============================================================
// ===============================================================
logInButtonRef.addEventListener('click', onLoginBtnClick);
checkBoxRef.addEventListener('change', onToggle);
logOutButtonRef.addEventListener('click', logOutHandler);
// ===============================================================
function onLoginBtnClick() {
  modalWindow.classList.remove('invis');
  window.addEventListener('keydown', modalCloseOnEscPress);
  modalWindow.addEventListener('click', onCloseModalBtn);
  formButtonLogInRef.addEventListener('click', onLoginPageSubmit);
  formRef.addEventListener('submit', onFormSubmit);
  onToggle();
}
// ===============================================================
function onFormSubmit(e) {
  e.preventDefault();
  if (firstPassInputRef.value.length < 6) {
    Notiflix.Notify.failure('Password should be at least 6 characters');
  } else if (userEmailInputRef.value.length === 0) {
    Notiflix.Notify.failure('Please enter Your email address');
  } else {
    const userEmail = userEmailInputRef.value;
    const userPassword = firstPassInputRef.value;
    createAccount(auth, userEmail, userPassword);
    formRef.reset();
    modalWindow.classList.add('invis');
  }
}
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
function onToggle() {
  if (checkBoxRef.checked) {
    formButtonSignUpRef.disabled = false;
    formButtonSignUpRef.style.border = '1px black solid';
  } else {
    formButtonSignUpRef.disabled = true;
  }
}
// ===============================================================
async function createAccount(auth, email, password) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    Notiflix.Notify.success('User created');

    console.log(userCredentials.user);
  } catch (error) {
    console.log(error);
    Notiflix.Notify.warning(
      'User already created, please procced to Log In page'
    );
  }
}

// ===============================================================

// ===============================================================
function onLoginPageSubmit(e) {
  e.preventDefault();
  const userEmail = userEmailInputRef.value;
  const userPassword = firstPassInputRef.value;

  const user = localStorage.setItem(
    'userData',
    JSON.stringify({ userEmail, userPassword })
  );
  loginIntoAccount(auth, userEmail, userPassword);
  formRef.reset();
  modalWindow.classList.add('invis');
}

// ===============================================================
async function loginIntoAccount(auth, email, password) {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    Notiflix.Notify.success('You are In');
    libraryLinkRef.removeEventListener('click', onLibraryLinkClick);
  } catch (error) {
    console.log(error);
    Notiflix.Notify.warning(
      'User is not found. Or user data do not match ours records'
    );
  }
}

// ===============================================================
// ===============================================================
function logOutHandler() {
  if (localStorage.getItem('userData')) {
    signOut(auth)
      .then(() => {
        Notiflix.Notify.success('Sign-out successful.');
        libraryLinkRef.addEventListener('click', onLibraryLinkClick);
        localStorage.removeItem('userData');
      })
      .catch(error => {
        Notiflix.Notify.warning('Sign-out unsuccessful.');
      });
  }
}
// ===============================================================
function onLibraryLinkClick(e) {
  e.preventDefault();
  Notiflix.Notify.warning('To use "Mi Library" page. First You need to login');
}
// ===============================================================
