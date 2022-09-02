import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  set,
  onValue,
  child,
  push,
  update,
  setValue,
} from 'firebase/database';
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

const db = getDatabase();

// ===============================================================
// let watchedMoviesList = JSON.parse(localStorage.getItem('watched'));
// let queueMoviesList = JSON.parse(localStorage.getItem('queue'));
// ===============================================================

// ===============================================================
export function WriteUsersData(
  userId,
  email,
  queueObj = '',
  watchedListObj = ''
) {
  const reference = ref(db, 'users/' + userId);
  set(reference, {
    email: email,
    moviesInWatchingQueue: queueObj,
    moviesInWatchedList: watchedListObj,
  });
}
WriteUsersData('userTest', 'sk@gmail.com', 'obj1', 'obj2');
// ===============================================================

// ===============================================================
export function readUsersData(userId) {
  const usersRef = ref(db, 'users/' + userId);
  onValue(usersRef, snapshot => {
    const data = snapshot.val();
    const stringifiedWatchedList = JSON.stringify(data.moviesInWatchedList);
    const stringifiedQueueList = JSON.stringify(data.moviesInWatchingQueue);
    if (data.moviesInWatchingQueue) {
      localStorage.setItem('watched', stringifiedWatchedList);
    } else if (data.moviesInWatchedList) {
      localStorage.setItem('queue', stringifiedQueueList);
    } else {
      console.log('error: no data');
    }
  });
}
// readUsersData('IHH5i2KOEGTRIQJuYCBke5SYCdS2');
// ===============================================================

// ===============================================================
// function updateUsersData(userId, name, email, queueObj, watchedListObj) {
//   const updateData = {
//     userName: name,
//     email: email,
//     moviesInWatchingQueue: queueObj,
//     moviesInWatchedList: watchedListObj,
//   };

//   const updates = {};
//   updates['users/' + userId] = updateData;

//   return update(ref(db), updates);
// }

// updateUsersData(
//   'userTest',
//   'SerhiiKaushnian',
//   'test@gmail.com',
//   'userData1',
//   'usaerData2'
// );
// ===============================================================

// ===============================================================
// function pushToWatchedList(userId, updateData) {
//   const postListRef = ref(db, `users/${userId}/moviesInWatchingQueue`);
//   const newPostRef = push(postListRef);
//   set(newPostRef, updateData);
// }
// pushToWatchedList('userTest', queueMoviesList);
// ===============================================================

// ===============================================================
export function updateWatchedList(userId, updateData) {
  console.log('updateData: ', updateData);
  if (!updateData) {
    return;
  } else {
    const updates = {};
    updates[`users/${userId}/moviesInWatchedList`] = updateData;
    return update(ref(db), updates);
  }
}
// updateWatchedList('userTest', watchedMoviesList);
// ===============================================================

// ===============================================================
export function updateMoviesQueue(userId, updateData) {
  console.log('updateData: ', updateData);
  if (!updateData) {
    return;
  } else {
    const updateQueueList = {};
    updateQueueList[`users/${userId}/moviesInWatchingQueue`] = updateData;
    return update(ref(db), updateQueueList);
  }
}
// updateMoviesQueue('userTest', queueMoviesList);
// ===============================================================

// ===============================================================
