
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1y2pUih_wW26DVy8Adw64nAI4cbbEg0E",
  authDomain: "nullbr-portfolio.firebaseapp.com",
  projectId: "nullbr-portfolio",
  storageBucket: "nullbr-portfolio.appspot.com",
  messagingSenderId: "335638362053",
  appId: "1:335638362053:web:3187f973f232a988e8fdac",
  measurementId: "G-F0RXS6T56G"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);