import React from "react";
import "../styles/Highlight.css";
import odlaw from "../images/odlaw.png";
import waldo from "../images/waldo.png";
import wenda from "../images/wenda.png";
import wizard from "../images/wizard.png";
//import checkCharacter from "../utility/character";

//Initialize Firebase products
import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "../firebase";
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

let charactersDatabase = firebase
  .firestore()
  .collection("characters")
  .doc("4io2HrKnIaopfg1C8XMQ");

function Highlight(props) {
  function checkCharacter(event) {
    const character = event.target.className.slice(10);
    const clickX = props.clickX;
    const clickY = props.clickY;
    const imgWidth = props.imgWidth;
    const imgHeight = props.imgHeight;
    let characters;

    charactersDatabase.get().then((doc) => {
      characters = doc.data();
      if (
        clickX >= imgWidth * characters[character].x[0] &&
        clickX <= imgWidth * characters[character].x[1] &&
        clickY >= imgHeight * characters[character].y[0] &&
        clickY <= imgHeight * characters[character].y[1]
      ) {
        console.log("You are right");
      } else {
        console.log("You are wrong");
      }
    });
  }

  return (
    <div className="Highlight-square">
      <span className="Highlight-menu">
        <button className="Highlight-odlaw" onClick={checkCharacter}>
          <img src={odlaw} alt="Odlaw avatar" />
          Odlaw
        </button>
        <button className="Highlight-waldo" onClick={checkCharacter}>
          <img src={waldo} alt="Waldo avatar" />
          Waldo
        </button>
        <button className="Highlight-wenda" onClick={checkCharacter}>
          <img src={wenda} alt="Wenda avatar" />
          Wenda
        </button>
        <button className="Highlight-wizard" onClick={checkCharacter}>
          <img src={wizard} alt="Wizard avatar" />
          Wizard
        </button>
      </span>
    </div>
  );
}

export default Highlight;
