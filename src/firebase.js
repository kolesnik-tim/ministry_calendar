import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6dyeVwjB2goQeWx_CTKaI5z6E1z3TD4A",
  authDomain: "ministry-calendar-35967.firebaseapp.com",
  projectId: "ministry-calendar-35967",
  storageBucket: "ministry-calendar-35967.firebasestorage.app",
  messagingSenderId: "695049435349",
  appId: "1:695049435349:web:c24f15bd42d4c5ff79ca5c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
