import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr-e8GhXhhXe8BdVd8w5QKAkxWaz1cJM8",
  authDomain: "kuis2-firestore.firebaseapp.com",
  projectId: "kuis2-firestore",
  storageBucket: "kuis2-firestore.appspot.com",
  messagingSenderId: "619300003448",
  appId: "1:619300003448:web:0418b8083ecdb13eded78d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};
