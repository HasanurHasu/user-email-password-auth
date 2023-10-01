// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcD3dapg1QCwzgOtYb-FdW6RdDbfo78x4",
    authDomain: "user-email-password-auth-652b8.firebaseapp.com",
    projectId: "user-email-password-auth-652b8",
    storageBucket: "user-email-password-auth-652b8.appspot.com",
    messagingSenderId: "650797510020",
    appId: "1:650797510020:web:a4f341ee7287c0427c81d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;