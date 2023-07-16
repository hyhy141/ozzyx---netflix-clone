import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDpX6RlnBejrR35T0bXHUEn1kyX3xhya-o",
  authDomain: "netflix-71b7d.firebaseapp.com",
  projectId: "netflix-71b7d",
  storageBucket: "netflix-71b7d.appspot.com",
  messagingSenderId: "73464489200",
  appId: "1:73464489200:web:2f897f7000ec5881c0ce35",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
