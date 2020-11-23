import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBSjdCyVsVqP4kZpyHUH23zHVScWR1Too4",
    authDomain: "react-app-cursos-9be9d.firebaseapp.com",
    databaseURL: "https://react-app-cursos-9be9d.firebaseio.com",
    projectId: "react-app-cursos-9be9d",
    storageBucket: "react-app-cursos-9be9d.appspot.com",
    messagingSenderId: "420661084406",
    appId: "1:420661084406:web:61d5a2cf2929254a7e2cd7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}