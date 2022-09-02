import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
const fbConfig = {
    apiKey: "AIzaSyDES3pZdx25ra0RehelucHsnyaBi1KcsTc",
    authDomain: "jakeandmeg.firebaseapp.com",
    databaseURL: "https://jakeandmeg-default-rtdb.firebaseio.com",
    projectId: "jakeandmeg",
    storageBucket: "jakeandmeg.appspot.com",
    messagingSenderId: "36963119081",
    appId: "1:36963119081:web:9b1643e2e316f535102578"
  };
firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default fbConfig 