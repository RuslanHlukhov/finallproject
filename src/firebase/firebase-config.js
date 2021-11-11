import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/firebase-database-compat";

const firebaseConfig = {
    apiKey: "AIzaSyD7-y0zjNug5XConS7lVyUqcImHrghm25U",
    authDomain: "finalproject-c615a.firebaseapp.com",
    projectId: "finalproject-c615a",
    storageBucket: "finalproject-c615a.appspot.com",
    messagingSenderId: "901462991867",
    appId: "1:901462991867:web:5e81ccb3fe69f1091c615e",
    measurementId: "G-93MVGHVWTB"
  };


  firebase.initializeApp(firebaseConfig)


  export default firebase;