import firebase from "firebase/app";
import "firebase/firestore";

//Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyDoZ82DZFbGsMptB51tWfd3t0wx5g1qiJw",
  authDomain: "whereswaldo-5f140.firebaseapp.com",
  projectId: "whereswaldo-5f140",
  storageBucket: "whereswaldo-5f140.appspot.com",
  messagingSenderId: "795910774501",
  appId: "1:795910774501:web:699def5b7b8224e4857e0c",
  measurementId: "G-YPJ5GZKGKJ",
};

//Initialize Firebase products
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

//Database paths
let charactersDatabase = firebase.firestore().collection("characters");

let leaderboardDatabase = firebase.firestore().collection("leaderboard");

//Data functions
function storeLeaderboardData(time) {
  const nameInput = document.querySelector(".Game-end-popup-input");

  if (nameInput.value === "") {
    leaderboardDatabase.add({
      name: "Anonymous",
      time: time,
    });
    return;
  }
  leaderboardDatabase.add({
    name: nameInput.value,
    time: time,
  });
  return;
}

export { charactersDatabase, storeLeaderboardData };
