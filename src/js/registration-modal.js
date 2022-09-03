import Notiflix from 'notiflix';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
} from 'firebase/auth';
import {
  WriteUsersData,
  updateMoviesQueue,
  updateWatchedList,
  readUsersData,
} from './_lifetime_database';
// ==================firebaseConfig===============================
const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyBwIHbipBLGGO3rbF9X_3hWkD1LKg_9nto',
  authDomain: 'filmoteka-auth-d1821.firebaseapp.com',
  databaseURL:
    'https://filmoteka-auth-d1821-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-auth-d1821',
  storageBucket: 'filmoteka-auth-d1821.appspot.com',
  messagingSenderId: '528877394896',
  appId: '1:528877394896:web:a8dabe5ad1904b525c77d5',
});
// ===============================================================
const auth = getAuth(firebaseConfig);
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
let libraryLinkRef = document.querySelector('.library-link');
// ===============================================================
let watchedMoviesList;
let queueMoviesList;
if (localStorage.getItem('watched')) {
  watchedMoviesList = JSON.parse(localStorage.getItem('watched'));
}
if (localStorage.getItem('queue')) {
  queueMoviesList = JSON.parse(localStorage.getItem('queue'));
}
// ===============================================================
// libraryLinkRef.addEventListener('click', onLibraryLinkClick);
formButtonSignUpRef.disabled = true;
// ===============================================================
function enableLibraryLink() {
  libraryLinkRef = document.querySelector('.library-link');
  libraryLinkRef.removeEventListener('click', onLibraryLinkClick);
}
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
    formButtonSignUpRef.style.border = '1px grey solid';
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
    createdUserId = userCredentials.user.uid;
    WriteUsersData(userCredentials.user.uid, email);
    Notiflix.Notify.success('User created');
    logOutButtonRef.disabled = false;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.warning(
      'User already created, please procced to Log In page'
    );
  }
}
// ===============================================================
function onLoginPageSubmit(e) {
  e.preventDefault();
  const userEmail = userEmailInputRef.value;
  const userPassword = firstPassInputRef.value;
  loginIntoAccount(auth, userEmail, userPassword);
  formRef.reset();
  modalWindow.classList.add('invis');
}
// ===============================================================
async function loginIntoAccount(auth, email, password) {
  try {
    auth = getAuth(firebaseConfig);
    await setPersistence(auth, browserLocalPersistence);
    const USERS_UID = await signInWithEmailAndPassword(auth, email, password);
    clearLocalStorage();
    isUserAlreadyLogedIn();
    libraryLinkRef.removeEventListener('click', onLibraryLinkClick);
  } catch (error) {
    console.log(error);
    Notiflix.Notify.warning(
      'User is not found. Or user data do not match ours records'
    );
  }
}
// ===============================================================
function logOutHandler() {
  signOut(auth)
    .then(() => {
      Notiflix.Notify.success('Log-out successful.');
      libraryLinkRef.addEventListener('click', onLibraryLinkClick);
      logOutButtonRef.disabled = true;
      clearLocalStorage();
    })
    .catch(error => {
      Notiflix.Notify.warning('Log-out unsuccessful.');
    });
}
// ===============================================================
function onLibraryLinkClick(e) {
  e.preventDefault();
  Notiflix.Notify.info('To use "Mi Library" page. First You need to login');
}
// ===============================================================
async function isUserAlreadyLogedIn() {
  const auth = getAuth(firebaseConfig);

  onAuthStateChanged(auth, user => {
    if (user) {
      Notiflix.Notify.success('You are loged in');
      logOutButtonRef.disabled = false;
    } else {
      console.log(error);
    }
  });
}
// ===============================================================
export let USERS_UID;
// ===============================================================
function ifUserLoged() {
  const auth = getAuth(firebaseConfig);

  onAuthStateChanged(auth, user => {
    if (user) {
      USERS_UID = user.uid;
      updateUsersLibrary(USERS_UID, watchedMoviesList, queueMoviesList);
      libraryLinkRef.removeEventListener('click', onLibraryLinkClick);
    } else {
      libraryLinkRef.addEventListener('click', onLibraryLinkClick);
      logOutButtonRef.disabled = true;
    }
  });
}
ifUserLoged();

// ===============================================================
async function updateUsersLibrary(usersUid, watchedList, queueList) {
  readUsersData(usersUid);
  const timeOut = setTimeout(() => {
    updateMoviesQueue(usersUid, queueList);
    updateWatchedList(usersUid, watchedList);
  }, 5000);
}

// ===============================================================
function clearLocalStorage() {
  localStorage.removeItem('queue');
  localStorage.removeItem('watched');
}
