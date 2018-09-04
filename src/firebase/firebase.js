import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBzKxudt5UyTyJCteJ74Eb3QuiG3xFiYBU",
  authDomain: "basicloginpage.firebaseapp.com",
  databaseURL: "https://basicloginpage.firebaseio.com",
  projectId: "basicloginpage",
  storageBucket: "basicloginpage.appspot.com",
  messagingSenderId: "286397134560"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
