import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_CWVA_3d2XmFZTYm_JOnsdomfu8BTJRk",
  authDomain: "nenplan-e8abb.firebaseapp.com",
  databaseURL: "https://nenplan-e8abb.firebaseio.com",
  projectId: "nenplan-e8abb",
  storageBucket: "nenplan-e8abb.appspot.com",
  messagingSenderId: "702115606308",
  appId: "1:702115606308:web:e511ffc74317ca5a100db1",
  measurementId: "G-4WMMKH1Z4K"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
