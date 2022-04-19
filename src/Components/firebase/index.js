// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

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
export const db = getFirestore(app);

const usersCollectionRef = collection(db, "Users");

export const createUserDocument = async (users, data) => {
  console.log("Check");
  // console.log(data.cId);
  // console.log(users.email);
  if (!users) return;

  console.log(users, data);

  await addDoc(usersCollectionRef, {
    email: users.email,
    firstname: data.firstName,
    cId: data.certificateId,
    company: data.company,
    contact: data.contact,
    experience: data.experience,
    lastname: data.lastName,
    location: data.location,
    policy: data.policy,
  });

  console.log("Document written with ID");
};
