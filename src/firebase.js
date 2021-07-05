import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBIiud_Pw_Z_eRnaunAWMQ3GdlEuzx-j0w",
  authDomain: "linkedin-clone-b394d.firebaseapp.com",
  projectId: "linkedin-clone-b394d",
  storageBucket: "linkedin-clone-b394d.appspot.com",
  messagingSenderId: "759658598327",
  appId: "1:759658598327:web:5140762c1ddce6984a2232",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
