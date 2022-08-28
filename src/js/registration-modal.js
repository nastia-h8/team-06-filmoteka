import Notiflix from 'notiflix';
import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from 'firebase/auth';
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

const logInButtonRef = document.querySelector('.auth-btn');
const modalWindow = document.querySelector('.container__form');
const rowRef = document.querySelector('.row');
const backDropRef = document.querySelector('.backdrop');
const closeModalBtnRef = document.querySelector('.fa-solid');
const checkBoxRef = document.querySelector('.form-check-input');
const formButtonRef = document.querySelector('.btn-primary');
const formRef = document.querySelector('.form');
const firstPassInputRef = document.querySelector('#firstPass');
const repeatPassInputRef = document.querySelector('#repeatedPass');
const userNameInputRef = document.querySelector('#userName');
const userEmailInputRef = document.querySelector('#userEmail');
const loginLinkRef = document.querySelector('.login__link');
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
  loginLinkRef.addEventListener('click', onLoginLinkClick);
  formRef.addEventListener('submit', onFormSubmit);
}
// ===============================================================
function onFormSubmit(e) {
  e.preventDefault();
  if (firstPassInputRef.value !== repeatPassInputRef.value) {
    Notiflix.Notify.failure('Passwords do not match each others');
  } else {
    const userName = userNameInputRef.value;
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
function onToggle(event) {
  if (this.checked) {
    formButtonRef.disabled = false;
    formButtonRef.style.border = '1px black solid';
  } else {
    formButtonRef.disabled = true;
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
  }
}

// ===============================================================
function onLoginLinkClick(e) {
  e.preventDefault();
  const loginMarkUp = `	<div class="row">
		<div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

			<p class="text-center">Log In</p>
			<div class="close__icon">
				<i class="fa-solid fa-circle-xmark"></i>
			</div>
			<form class="mx-1 mx-md-4 form form__login">

				<div class="form__input">
					<i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
					<div class="form-outline flex-fill mb-0">
					<input type="email" id="userEmail" class="form-control" placeholder=" " />
						<label class="form-label" for="userEmail">Your Email</label>
						</div>
						</div>
						
						<div class="form__input">
						<i class="fas fa-lock fa-lg me-3 fa-fw"></i>
						<div class="form-outline flex-fill mb-0">
						<input type="password" id="firstPass" class="form-control" placeholder=" " />
						<label class="form-label" for="firstPass">Password</label>
						</div>
						</div>
						<button type="submit" class="btn btn-primary btn-lg">Log In</button>
						</form>
						
						</div>
						<div class="img__container">
						
						<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image">
						
		</div>
	</div>`;
  modalWindow.innerHTML = '';
  modalWindow.insertAdjacentHTML('afterbegin', loginMarkUp);
  const userEmailInputRef = document.querySelector('#userEmail');
  const firstPassInputRef = document.querySelector('#firstPass');
  const formLoginRef = document.querySelector('.form__login');
  formRef.removeEventListener('submit', onFormSubmit);
  formLoginRef.addEventListener('submit', onLoginPageSubmit);
}

// ===============================================================
function onLoginPageSubmit(e) {
  e.preventDefault();
  const userEmail = userEmailInputRef.value;
  console.log('userEmail: ', userEmail);
  const userPassword = firstPassInputRef.value;
  console.log('userPassword: ', userPassword);
  // loginIntoAccount(auth, userEmail, userPassword);
  // formRef.reset();
  // modalWindow.classList.add('invis');
}

// ===============================================================
// async function loginIntoAccount(auth, email, password) {
//   console.log(email);
//   // signOut(auth)
//   //   .then(() => {
//   //     Notiflix.Notify.success('Sign-out successful.');
//   //   })
//   //   .catch(error => {
//   //     Notiflix.Notify.warning('Sign-out unsuccessful.');
//   //   });

//   // try {
//   //   const userCredentials = await signInWithEmailAndPassword(
//   //     auth,
//   //     email,
//   //     password
//   //   );
//   //   Notiflix.Notify.success('User loged In');
//   //   console.log(userCredentials.user);
//   // } catch (error) {
//   //   console.log(error);
//   // }

//   // onAuthStateChanged(auth, user => {
//   //   console.log(user);
//   //   if (user) {
//   //     Notiflix.Notify.success('User loged In');
//   //   } else {
//   //     Notiflix.Notify.warning('User does not exist');
//   //   }
//   // });
// }
