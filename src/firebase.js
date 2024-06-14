// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC2NrkD42oUNY59inYPK2wH5cIHYIkqLRo",
    authDomain: "resume-builder-58dc2.firebaseapp.com",
    projectId: "resume-builder-58dc2",
    storageBucket: "resume-builder-58dc2.appspot.com",
    messagingSenderId: "666447837216",
    appId: "1:666447837216:web:d6c46d872ee97e81706445",
    measurementId: "G-6EMK08SDN8"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };



