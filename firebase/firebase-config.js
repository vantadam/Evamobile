import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyAw93U5CTb2gL6zuWypZOwb25Awf72hVRM",
  authDomain: "evamobile-ee41b.firebaseapp.com",
  projectId: "evamobile-ee41b",
  storageBucket: "evamobile-ee41b.appspot.com",
  messagingSenderId: "965849450364",
  appId: "1:965849450364:web:88d0b178b7e69ff42506f9",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
