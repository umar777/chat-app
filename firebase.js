import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { getDatabase } from "firebase/database";
//import { getAuth, onAuthStateChanged } from "firebase/auth";

// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE-l4wsU_Gulfiauhu3CHIfLgkcP4Sd0w",
  authDomain: "chatapp-ed494.firebaseapp.com",
  projectId: "chatapp-ed494",
  storageBucket: "chatapp-ed494.appspot.com",
  messagingSenderId: "956236994334",
  appId: "1:956236994334:web:ef989618373375927ddb0f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth();
const db = app.firestore();


export { auth, db };