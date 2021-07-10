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

const getFirebase = () => app;

const getFirestore = () => firebase.firestore(app);

export { getFirebase, getFirestore };