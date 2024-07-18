import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'reactsupport-a5916.firebaseapp.com',
  projectId: 'reactsupport-a5916',
  storageBucket: 'reactsupport-a5916.appspot.com',
  messagingSenderId: '117929452110',
  appId: '1:117929452110:web:70b6682b767359cc69591f',
  measurementId: 'G-VSG80MT6RE',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); // Auth objesini export edin
export const db = getFirestore();
export const storage = getStorage();

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password); // Firebase signInWithEmailAndPassword fonksiyonu
};

















/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactsupport-a5916.firebaseapp.com",
  projectId: "reactsupport-a5916",
  storageBucket: "reactsupport-a5916.appspot.com",
  messagingSenderId: "117929452110",
  appId: "1:117929452110:web:70b6682b767359cc69591f",
  measurementId: "G-VSG80MT6RE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth()
export const db =getFirestore()
export const storage =getStorage()*/