// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFCHNh2PCaKrvUKvk17Vre0-zkWElCPtw",
  authDomain: "tradar-f2246.firebaseapp.com",
  projectId: "tradar-f2246",
  storageBucket: "tradar-f2246.appspot.com",
  messagingSenderId: "143960673812",
  appId: "1:143960673812:web:ed6a47e3a25e5954946101",
  measurementId: "G-JV026VM74J",
};

//NEED TO STORE VALUES IN AN ENV FILE BEFORE I COMMIT TO ENSURE SECRUITY

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
