import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { 
  getFirestore, 
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc, 
  doc, 
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBmk0Atrf0KGZg1P0A0GrebDpW1juYOkxg",
    authDomain: "apps-77ec7.firebaseapp.com",
    projectId: "apps-77ec7",
    storageBucket: "apps-77ec7.appspot.com",
    messagingSenderId: "1066779465769",
    appId: "1:1066779465769:web:8e4dc48668bdfc76aee438",
    measurementId: "G-BDXYSV427R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init servise
const db = getFirestore();

// api = colRef
const colRef = collection(db, "data");
const ordersRef = collection(db, "orders")
const analytics = getAnalytics(app);

export { getDocs, getFirestore, collection, colRef, ordersRef , addDoc, deleteDoc, doc};