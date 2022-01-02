import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  FIREBASE_API_KEY,
  FIREBASE_messagingSenderId,
  FIREBASE_appId,
  FIREBASE_authDomain,
  FIREBASE_projectId,
  FIREBASE_storageBucket,
} from "apis/private/apis";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_authDomain,
  projectId: FIREBASE_projectId,
  storageBucket: FIREBASE_storageBucket,
  messagingSenderId: FIREBASE_messagingSenderId,
  appId: FIREBASE_appId,
};

const app = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();

const db = getFirestore();
export { app, googleAuthProvider, db };
