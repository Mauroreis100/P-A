// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSchtXhSB6dR1dVWxU51WO_dpzFLpSMp0",
  authDomain: "perdidosachados-155fd.firebaseapp.com",
  projectId: "perdidosachados-155fd",
  storageBucket: "perdidosachados-155fd.appspot.com",
  messagingSenderId: "498883842957",
  appId: "1:498883842957:web:85531a089ed77ae7c223c4",
  measurementId: "G-VMPM801E3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Authentication
export const auth=getAuth(app)