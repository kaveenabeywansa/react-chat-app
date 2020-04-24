import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCWHcji_d6rx76x9MbkYGpJwU7ezSoIPDw",
    authDomain: "react-slack-clone-fef45.firebaseapp.com",
    databaseURL: "https://react-slack-clone-fef45.firebaseio.com",
    projectId: "react-slack-clone-fef45",
    storageBucket: "react-slack-clone-fef45.appspot.com",
    messagingSenderId: "518927931428",
    appId: "1:518927931428:web:e2d552d1fe852674faa0b1",
    measurementId: "G-W67MKXQ1DY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;