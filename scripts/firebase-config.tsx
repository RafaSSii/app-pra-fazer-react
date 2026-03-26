// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGF1X7FCM2wb1E9_kFQswWAOKTnIQDTcU",
  authDomain: "projetos-2026-1-rafoso.firebaseapp.com",
  projectId: "projetos-2026-1-rafoso",
  storageBucket: "projetos-2026-1-rafoso.firebasestorage.app",
  messagingSenderId: "222014957921",
  appId: "1:222014957921:web:cd11bfd18e82d5aa8dbd20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };