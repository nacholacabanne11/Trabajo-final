import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmeWOwhPPYVVW0aue0KtSCdxlzNU5Nc5c",
  authDomain: "react-ab0e9.firebaseapp.com",
  projectId: "react-ab0e9",
  storageBucket: "react-ab0e9.firebasestorage.app",
  messagingSenderId: "89577900930",
  appId: "1:89577900930:web:439b291b783d609e9b1d9b",
  measurementId: "G-XQL6Z86DQD",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export { app, auth };
