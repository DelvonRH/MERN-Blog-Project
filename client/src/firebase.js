// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // we use env like this in vite
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6a7be.firebaseapp.com",
  projectId: "mern-blog-6a7be",
  storageBucket: "mern-blog-6a7be.appspot.com",
  messagingSenderId: "199910491282",
  appId: "1:199910491282:web:85e535247fea378e9f124b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

