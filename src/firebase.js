// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVN2EqPbgwxGBgsh97ZDivOxa7DmPAh6Q",
  authDomain: "foodiedutywebsite.firebaseapp.com",
  projectId: "foodiedutywebsite",
  storageBucket: "foodiedutywebsite.appspot.com",
  messagingSenderId: "55365874938",
  appId: "1:55365874938:web:173fd0950ad4116dc00543"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app)