// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDfY8CdogAdeoAPJaAg7Wn4qhXcNVwhrEE",
    authDomain: "web-products-aa1cb.firebaseapp.com",
    databaseURL: "https://web-products-aa1cb.firebaseio.com",
    projectId: "web-products-aa1cb",
    storageBucket: "web-products-aa1cb.appspot.com",
    messagingSenderId: "423653607181",
    appId: "1:423653607181:web:5a2c8c5350abcda3ec9244",
    measurementId: "G-NHEC6DMZBN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };