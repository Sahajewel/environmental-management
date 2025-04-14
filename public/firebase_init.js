// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8z4qOCiIvvJI7Az0XOm46ajfI3WL3YmE",
  authDomain: "environmental-management-40f87.firebaseapp.com",
  projectId: "environmental-management-40f87",
  storageBucket: "environmental-management-40f87.firebasestorage.app",
  messagingSenderId: "534117956128",
  appId: "1:534117956128:web:9ab490b07de06d02275a45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);