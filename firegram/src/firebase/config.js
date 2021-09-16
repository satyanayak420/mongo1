import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyB0d_6NPKtfDzml6AeR4QegfCYtyzQ_74g",
  authDomain: "react-image2051.firebaseapp.com",
  projectId: "react-image2051",
  storageBucket: "react-image2051.appspot.com",
  messagingSenderId: "158935962543",
  appId: "1:158935962543:web:c52452fd4a458973cd555a",
  measurementId: "G-P42RRK8RQ8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
