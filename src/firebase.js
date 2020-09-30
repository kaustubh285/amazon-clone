import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkRG6x3krvmkkl7wiT_NlPN_GXys1bBFA",
  authDomain: "ecom-aamzon.firebaseapp.com",
  databaseURL: "https://ecom-aamzon.firebaseio.com",
  projectId: "ecom-aamzon",
  storageBucket: "ecom-aamzon.appspot.com",
  messagingSenderId: "875107925338",
  appId: "1:875107925338:web:e98fc876092df9216c8763",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
