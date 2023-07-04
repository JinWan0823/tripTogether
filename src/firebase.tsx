import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYXbTsjjWGSw73zWB3mjc51aDE2-AN3fE",
  authDomain: "my-project-triptogether.firebaseapp.com",
  projectId: "my-project-triptogether",
  storageBucket: "my-project-triptogether.appspot.com",
  messagingSenderId: "372962740910",
  appId: "1:372962740910:web:32d312b07c9c2e05cd3b3f",
  measurementId: "G-PJ8ZLEF4CG",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
