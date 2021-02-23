// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAQeG-nMmoalyMmF_RXnkftQb0-Sg2vOiw",
  authDomain: "pinnaclelife-2021.firebaseapp.com",
  projectId: "pinnaclelife-2021",
  storageBucket: "pinnaclelife-2021.appspot.com",
  messagingSenderId: "17182550712",
  appId: "1:17182550712:web:eac82f0c80b981bc32224d",
  measurementId: "G-V04CSSVNWZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();