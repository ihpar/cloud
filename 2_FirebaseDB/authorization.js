import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWNA1oU4b2CVT2EUXoIaF29AS3xgMZvjo",
  authDomain: "test-693d0.firebaseapp.com",
  projectId: "test-693d0",
  storageBucket: "test-693d0.appspot.com",
  messagingSenderId: "330613427275",
  appId: "1:330613427275:web:559a321b32990ed4b311ce",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
};
