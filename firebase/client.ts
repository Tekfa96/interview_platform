// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCsrb0OXOo7wzpOfZ4ViHUDpyZDFm_edNw",
  authDomain: "prepinterview-bbb20.firebaseapp.com",
  projectId: "prepinterview-bbb20",
  storageBucket: "prepinterview-bbb20.firebasestorage.app",
  messagingSenderId: "647518999088",
  appId: "1:647518999088:web:1c7424fd54f82129c7d3f5",
  measurementId: "G-7PFKQW43H3",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
