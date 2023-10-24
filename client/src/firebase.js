// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-9e2c2.firebaseapp.com",
  projectId: "mern-auth-9e2c2",
  storageBucket: "mern-auth-9e2c2.appspot.com",
  messagingSenderId: "100281583129",
  appId: "1:100281583129:web:d719c7b717dae50ecccc88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);