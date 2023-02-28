import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHEpws41iuazMaADOyJxGmivOJsC9hSV0",
  authDomain: "store-a2f93.firebaseapp.com",
  projectId: "store-a2f93",
  storageBucket: "store-a2f93.appspot.com",
  messagingSenderId: "17467767280",
  appId: "1:17467767280:web:a61a363d4dd2fb0a414535",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDoc = doc(db, 'users', userAuth.uid);

  console.log(userDoc);

  const userSnapShot = await getDoc(userDoc);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDoc, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }

  return userDoc
};

