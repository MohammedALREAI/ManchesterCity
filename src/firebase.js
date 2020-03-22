import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

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

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}