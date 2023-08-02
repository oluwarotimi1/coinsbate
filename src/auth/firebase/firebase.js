import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
//   createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKDqSx93tV8uQQK-wpvjAKw4dDMDQrP9s",
  authDomain: "regxchange.firebaseapp.com",
  projectId: "regxchange",
  storageBucket: "regxchange.appspot.com",
  messagingSenderId: "34035784366",
  appId: "1:34035784366:web:117718af00d1c1dff9eb3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const createUser= createUserWithEmailAndPassword();

export const db = getFirestore(app);

export const logout = () => {
    signOut(auth)
      .then(() => {
       console.log("logged Out") //Logged out 
      })
      .catch((error) => {
        console.log(error);
      });
  };
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return currentUser;
}
export const provider = new GoogleAuthProvider();
