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


const firebaseConfigTesting = {
    apiKey: "AIzaSyCJEV-JGNozLggFRnaP8uiHUYas8ggp5LQ",
    authDomain: "desarrollo-ec93c.firebaseapp.com",
    databaseURL: "https://desarrollo-ec93c.firebaseio.com",
    projectId: "desarrollo-ec93c",
    storageBucket: "desarrollo-ec93c.appspot.com",
    messagingSenderId: "575914997136",
    appId: "1:575914997136:web:58f6dd4767e6ead5b7af15",
    measurementId: "G-W509M7GN4C"
};

if (process.env.NODE_ENV === 'test') {
    firebase.initializeApp(firebaseConfigTesting);
} else {
    firebase.initializeApp(firebaseConfig);
}


// Initialize Firebase

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}