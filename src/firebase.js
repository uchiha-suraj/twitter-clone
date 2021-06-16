import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDfclA_YzbteVARmuNVgJjC04Z1S3EvT94",
  authDomain: "twitter-aa517.firebaseapp.com",
  projectId: "twitter-aa517",
  storageBucket: "twitter-aa517.appspot.com",
  messagingSenderId: "528225555243",
  appId: "1:528225555243:web:fb3e974f532ff0a7a72b6e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
