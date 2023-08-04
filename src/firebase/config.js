// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzZUBw1B36CVmApjiZ3bW96RnBxjqpkU0",
  authDomain: "musicrecommenderapp.firebaseapp.com",
  projectId: "musicrecommenderapp",
  storageBucket: "musicrecommenderapp.appspot.com",
  messagingSenderId: "310742200803",
  appId: "1:310742200803:web:fdf5a0afa79babbb1430d6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );