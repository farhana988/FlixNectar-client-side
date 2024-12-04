// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj4Hui7D0Z_CZZi6QDjGQ7VhanVely3vc",
  authDomain: "assi10-fb313.firebaseapp.com",
  projectId: "assi10-fb313",
  storageBucket: "assi10-fb313.firebasestorage.app",
  messagingSenderId: "1057461522911",
  appId: "1:1057461522911:web:82e12164c13d129862746a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);