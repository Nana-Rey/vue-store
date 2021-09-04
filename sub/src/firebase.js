import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyB2-YsupzmdFvnaDBFyMZw7rP-tWq1BAa0",
//     authDomain: "sub-store.firebaseapp.com",
//     projectId: "sub-store",
//     storageBucket: "sub-store.appspot.com",
//     messagingSenderId: "589660387084",
//     appId: "1:589660387084:web:039c12b819e1aa620dbb29"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);


  // Import the functions you need from the SDKs you need
//
//import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2-YsupzmdFvnaDBFyMZw7rP-tWq1BAa0",
  authDomain: "sub-store.firebaseapp.com",
  databaseURL: "https://sub-store-default-rtdb.firebaseio.com",
  projectId: "sub-store",
  storageBucket: "sub-store.appspot.com",
  messagingSenderId: "589660387084",
  appId: "1:589660387084:web:039c12b819e1aa620dbb29"
};

// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);


export const db = firebaseApp.firestore();