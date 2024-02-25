// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4EjQetlr4pYOeISMvrOC0ngdDVzY72Xw",
  authDomain: "quickmart-945f5.firebaseapp.com",
  projectId: "quickmart-945f5",
  storageBucket: "quickmart-945f5.appspot.com",
  messagingSenderId: "187967039833",
  appId: "1:187967039833:web:69736e9e4bd84da1fa8448",
  measurementId: "G-6Z5G6EF4W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(app).addScope('email');
export default app;