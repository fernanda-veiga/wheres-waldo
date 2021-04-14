import React from "react";
import wheresWaldoImg from "../images/wheres-waldo.jpg";
import "../styles/App.css";
import Highlight from "./Highlight";
import showHighlight from "../utility/highlight";

//Initialize Firebase products
import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "../firebase";
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

//

/*let charactersDatabasePath = firebase
  .firestore()
  .collection("characters")
  .doc("4io2HrKnIaopfg1C8XMQ");*/

function App() {
  return (
    <div className="App">
      <div className="Odlaw"></div>
      <div className="Wizard"></div>
      <div className="Waldo"></div>
      <div className="Wanda"></div>
      <Highlight />
      <img src={wheresWaldoImg} onClick={showHighlight} alt="" />
    </div>
  );
}

export default App;
