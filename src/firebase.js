import firebase from "firebase/app";
import   "firebase/app";
import   "firebase/database";


const firebaseConfig = {
     apiKey: "AIzaSyD5yj22V3crbjmbGEJ8GbTvbobeJYu_Dqw",
     authDomain: "mancictarecity.firebaseapp.com",
     databaseURL: "https://mancictarecity.firebaseio.com",
     projectId: "mancictarecity",
     storageBucket: "mancictarecity.appspot.com",
     messagingSenderId: "284037286322",
     appId: "1:284037286322:web:6613fb31f15457e3da7cab",
     measurementId: "G-L12DXJ7QWC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseDB=firebase.database();
const matchesFirebase = firebaseDB.ref("matches");
export { firebaseDB, matchesFirebase };
