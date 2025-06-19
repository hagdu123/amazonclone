// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCHIZXrYh18cfGshijuYAjk8B8NhQbifY",
  authDomain: "clone-a43c4.firebaseapp.com",
  projectId: "clone-a43c4",
  storageBucket: "clone-a43c4.appspot.com",
  messagingSenderId: "956118854040",
  appId: "1:956118854040:web:a78c468129a36d5a0323ed",
  measurementId: "G-E7N5DDZ1J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
