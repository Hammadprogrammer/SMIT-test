import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPQG4H9LQqq1UC5vPay1gUP8EODV3uJak",
    authDomain: "smit-hachaton.firebaseapp.com",
    projectId: "smit-hachaton",
    storageBucket: "smit-hachaton.appspot.com",
    messagingSenderId: "861453022078",
    appId: "1:861453022078:web:20b87ff8fb3ae30b7f392f",
    measurementId: "G-WQR2WYZE5Q"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);