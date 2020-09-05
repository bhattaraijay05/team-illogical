import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPWlQIgy0qNeS5mLnMXA0JT2G87ni40a0",
  authDomain: "team-illogical.firebaseapp.com",
  databaseURL: "https://team-illogical.firebaseio.com",
  projectId: "team-illogical",
  storageBucket: "team-illogical.appspot.com",
  messagingSenderId: "431421081020",
  appId: "1:431421081020:web:cd614b0df2b5f9b11957b9",
  measurementId: "G-DJT8KHZFL2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
export { firebase, db, auth };
