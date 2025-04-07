import * as firebase from "firebase";
import "firebase/database";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

let config = {
  apiKey: "AIzaSyCA8c1dWH2vkCdH68Sm8kqgvG_87MEXJ2A",
  authDomain: "smart-energy-firebase-18cbf.firebaseapp.com",
  databaseURL: "https://smart-energy-firebase-18cbf-default-rtdb.firebaseio.com",
  projectId: "smart-energy-firebase-18cbf",
  storageBucket: "smart-energy-firebase-18cbf.firebasestorage.app",
  messagingSenderId: "193973073460",
  appId: "1:193973073460:web:13f73fad7ef07bc9fafc61",
  measurementId: "G-5NV0FHH646"
};

firebase.initializeApp(config);
// Initialize Firebase
//const analytics = getAnalytics(app);

export default firebase.database();

