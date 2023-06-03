// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const secret_apikey = "Get at secret"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: secret_apikey,
  authDomain: "caiochella.firebaseapp.com",
  projectId: "caiochella",
  storageBucket: "caiochella.appspot.com",
  messagingSenderId: "367889500208",
  appId: "1:367889500208:web:3f0ce41fd3481fac6645f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);