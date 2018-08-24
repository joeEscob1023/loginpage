import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBzKxudt5UyTyJCteJ74Eb3QuiG3xFiYBU",
  authDomain: "basicloginpage.firebaseapp.com",
  databaseURL: "https://basicloginpage.firebaseio.com",
  projectId: "basicloginpage",
  storageBucket: "basicloginpage.appspot.com",
  messagingSenderId: "286397134560"
};

const fire = firebase.initializeApp(config);
export default fire;
