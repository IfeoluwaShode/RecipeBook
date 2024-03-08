// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4R7XYmePgn-VYeeSq3V5RFcCB2yAfuhg",
  authDomain: "recipebook-b819d.firebaseapp.com",
  projectId: "recipebook-b819d",
  storageBucket: "recipebook-b819d.appspot.com",
  messagingSenderId: "248873508933",
  appId: "1:248873508933:web:9ecf3cf4ba782a6bb2832c",
  measurementId: "G-YSH77GEL08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const signup = (credentials) => {
  const { email, password } = credentials;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (credentials) => {
  const { email, password } = credentials;
  return signInWithEmailAndPassword(auth, email, password);
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
};

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
