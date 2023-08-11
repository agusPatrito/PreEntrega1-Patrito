
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDJViQyKZPDVtZAGDF6Qu2FWJn2QHQ6pfM",
  authDomain: "preentregas-patrito-reactjs.firebaseapp.com",
  projectId: "preentregas-patrito-reactjs",
  storageBucket: "preentregas-patrito-reactjs.appspot.com",
  messagingSenderId: "596977796121",
  appId: "1:596977796121:web:0cdb3412dd9a042a14d688"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)