//Import firebase!
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    //your key
  };

firebase.initializeApp(config);

function getFirebaseRef(refPath) {
    return firebase.database().ref(refPath);
  }
  
  export default {
    getFirebaseRef: getFirebaseRef
  };