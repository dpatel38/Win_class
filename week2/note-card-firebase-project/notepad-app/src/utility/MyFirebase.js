//Import firebase!
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCpb1f4TErfdL0ExkFPZRv0C4_c7wRG3Pw",
    authDomain: "note-card-project.firebaseapp.com",
    databaseURL: "https://note-card-project-default-rtdb.firebaseio.com",
    projectId: "note-card-project",
    storageBucket: "note-card-project.appspot.com",
    messagingSenderId: "42755239151",
    appId: "1:42755239151:web:93f8bd4f46e85bbfeeff1a"
  };

firebase.initializeApp(config);

function getFirebaseRef(refPath) {
    return firebase.database().ref(refPath);
  }
  
  export default {
    getFirebaseRef: getFirebaseRef
  };