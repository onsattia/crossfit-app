import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDbuhEEysWd5qlLIGB9vJjZ0OVEKqK2vQg",
    authDomain: "crossfit-box.firebaseapp.com",
    databaseURL: "https://crossfit-box.firebaseio.com",
    projectId: "crossfit-box",
    storageBucket: "crossfit-box.appspot.com",
    messagingSenderId: "608215340854"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
const auth = firebase.auth();

export {
  auth,
};