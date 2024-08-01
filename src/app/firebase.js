// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMp4l6DRnFEBfHcTAhylvdOnFIO5iXvkA",
  authDomain: "inventory-management-ef314.firebaseapp.com",
  projectId: "inventory-management-ef314",
  storageBucket: "inventory-management-ef314.appspot.com",
  messagingSenderId: "9720742925",
  appId: "1:9720742925:web:e2971c92c1eee77b0a8144",
  measurementId: "G-FFMYZEYJ1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}