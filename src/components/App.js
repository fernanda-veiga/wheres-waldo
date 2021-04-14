import React, { useState } from "react";
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
  const [clickX, setClickX] = useState(0);
  const [clickY, setClickY] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  function handleImgClick(event) {
    setClickX(event.pageX);
    setClickY(event.pageY);
    setImgWidth(event.target.offsetWidth);
    setImgHeight(event.target.offsetHeight);
    showHighlight(event);
  }

  return (
    <div className="App">
      <div className="Odlaw">{clickX}</div>
      <div className="Wizard">{clickY}</div>
      <div className="Waldo"></div>
      <div className="Wanda"></div>
      <Highlight
        clickX={clickX}
        clickY={clickY}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
      />
      <img src={wheresWaldoImg} onClick={handleImgClick} alt="" />
    </div>
  );
}

export default App;
