import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMt2S2gAHumCbLsubTsBuZBEf5XOtvAtY",
    authDomain: "react-api-d6c16.firebaseapp.com",
    databaseURL: "https://react-api-d6c16.firebaseio.com",
    projectId: "react-api-d6c16",
    storageBucket: "react-api-d6c16.appspot.com",
    messagingSenderId: "163144847117",
    appId: "1:163144847117:web:5654d937610e3eb086aa44",
    measurementId: "G-QLR6JVQN1N"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
