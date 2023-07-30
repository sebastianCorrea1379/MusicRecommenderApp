// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcUo1A0vPwYI6-ba8ShmwNxgFZyEJx_OY",
  authDomain: "journal-app-12523.firebaseapp.com",
  projectId: "journal-app-12523",
  storageBucket: "journal-app-12523.appspot.com",
  messagingSenderId: "484535662383",
  appId: "1:484535662383:web:75f60160b0a6fe315493da"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );