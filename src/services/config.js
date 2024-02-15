import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "sneakers-style.firebaseapp.com",
  projectId: "sneakers-style",
  storageBucket: "sneakers-style.appspot.com",
  messagingSenderId: "28532093925",
  appId: "1:28532093925:web:d94da58ec4b9a49db6350c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);