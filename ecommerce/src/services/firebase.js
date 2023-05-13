import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBp5GQy4KdWzJeUoFlTU0d-hL2cMh33Icw",
  authDomain: "coder-ecommerce-fe8bd.firebaseapp.com",
  projectId: "coder-ecommerce-fe8bd",
  storageBucket: "coder-ecommerce-fe8bd.appspot.com",
  messagingSenderId: "82754669204",
  appId: "1:82754669204:web:78fee9191373a1f06b0281",
  measurementId: "G-QNCG7Z9KP8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);