// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxGfFaZziJaWN3YAX733xDSawRPe4q75Y",
  authDomain: "autoser-b1e43.firebaseapp.com",
  projectId: "autoser-b1e43",
  storageBucket: "autoser-b1e43.firebasestorage.app",
  messagingSenderId: "298315752029",
  appId: "1:298315752029:web:d3ed3201a9f7ca8498a3b4",
  measurementId: "G-41WEWPKZNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);