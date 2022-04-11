import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmoDBADVCjpgEFRossyV5uZ6o07zeqmaI",
  authDomain: "linkedin-clone-41d97.firebaseapp.com",
  projectId: "linkedin-clone-41d97",
  storageBucket: "linkedin-clone-41d97.appspot.com",
  messagingSenderId: "613042306913",
  appId: "1:613042306913:web:fe5de27120ffc88a674f20",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dataBase = firebaseApp.firestore();
const auth = firebase.auth();

export { dataBase, auth };
