import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDHaH3upBNJTvqrWDs1invZpxqVAt9CiyA",
  authDomain: "fern-walkthrough.firebaseapp.com",
  databaseURL: "https://fern-walkthrough-default-rtdb.firebaseio.com",
  projectId: "fern-walkthrough",
  storageBucket: "fern-walkthrough.appspot.com",
  messagingSenderId: "943562711269",
  appId: "1:943562711269:web:a3f555407981f81716f40c",
  measurementId: "G-GXW3S5P7MN"
};

const firebase = initializeApp (firebaseConfig);
const auth = getAuth(firebase);
const db = getDatabase(firebase);

export {firebase, auth, db};
