import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBOyNaJ9f7oJuDiP8e6wZexOsnyYL_0Ajo",
    authDomain: "twitter-c06a0.firebaseapp.com",
    databaseURL: "https://twitter-c06a0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "twitter-c06a0",
    storageBucket: "twitter-c06a0.appspot.com",
    messagingSenderId: "58683518649",
    appId: "1:58683518649:web:96624ecea87b0ea2bab568",
    measurementId: "G-04ZK3G9C0D",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
