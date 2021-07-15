import firebase from "firebase/app";
import '@firebase/firestore';

const app = {
    apiKey: "AIzaSyARoWKDT6cc_9KUdKPEFCtrX-poFcKhJS4",
    authDomain: "minimal-shop---coderhouse.firebaseapp.com",
    projectId: "minimal-shop---coderhouse",
    storageBucket: "minimal-shop---coderhouse.appspot.com",
    messagingSenderId: "278997320388",
    appId: "1:278997320388:web:cc58e51240beb44d9b3f91"
};

if (!firebase.apps.length) {
    firebase.initializeApp(app);
  }

const getFirebase = () => app;

const getFirestore = () => firebase.firestore();

const getDate = () => firebase.firestore.Timestamp.fromDate(new Date())

export { getFirebase, getFirestore, getDate };