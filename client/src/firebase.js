// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b6a7a.firebaseapp.com",
  projectId: "mern-estate-b6a7a",
  storageBucket: "mern-estate-b6a7a.appspot.com",
  messagingSenderId: "963971522725",
  appId: "1:963971522725:web:5f28cbbf60637f4a186d4c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
