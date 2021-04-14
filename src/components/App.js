import React from "react";
import wheresWaldoImg from "../images/wheres-waldo.jpg";
import "../styles/App.css";
import Highlight from "./Highlight";

//Initialize Firebase products
import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyDoZ82DZFbGsMptB51tWfd3t0wx5g1qiJw",
  authDomain: "whereswaldo-5f140.firebaseapp.com",
  projectId: "whereswaldo-5f140",
  storageBucket: "whereswaldo-5f140.appspot.com",
  messagingSenderId: "795910774501",
  appId: "1:795910774501:web:699def5b7b8224e4857e0c",
  measurementId: "G-YPJ5GZKGKJ",
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

//

let charactersDatabasePath = firebase
  .firestore()
  .collection("characters")
  .doc("4io2HrKnIaopfg1C8XMQ");

function App() {
  function showHighlight(event) {
    const imgWidth = event.target.offsetWidth;
    const imgHeight = event.target.offsetHeight;
    const clickX = event.pageX;
    const clickY = event.pageY;
    let characters;

    //Add a square to the click
    const characterSquare = document.querySelector(".Highlight-square");
    if (
      window.getComputedStyle(characterSquare).getPropertyValue("display") ===
      "none"
    ) {
      characterSquare.style.display = "block";
      characterSquare.style.top = `${clickY}px`;
      characterSquare.style.left = `${clickX}px`;
      characterSquare.style.transform = `translate(-${
        characterSquare.offsetWidth / 2
      }px, -${characterSquare.offsetHeight / 2}px)`;
    } else {
      characterSquare.style.display = "none";
    }

    /*const characterSquare = document.createElement("div");
    characterSquare.classList.add("character-square");
    
    event.target.appendChild(characterSquare);*/

    charactersDatabasePath.get().then((doc) => {
      characters = doc.data();

      //Find Wizard
      if (
        clickX >= imgWidth * characters.wizard.xRelativeInitial &&
        clickX <= imgWidth * characters.wizard.xRelativeFinal &&
        clickY >= imgHeight * characters.wizard.yRelativeInitial &&
        clickY <= imgHeight * characters.wizard.yRelativeFinal
      ) {
        console.log("Wizard is here");
      }
      //Find Odlaw
      else if (
        clickX >= imgWidth * characters.odlaw.xRelativeInitial &&
        clickX <= imgWidth * characters.odlaw.xRelativeFinal &&
        clickY >= imgHeight * characters.odlaw.yRelativeInitial &&
        clickY <= imgHeight * characters.odlaw.yRelativeFinal
      ) {
        console.log("Odlaw is here");
      }
      //Find Wenda
      else if (
        clickX >= imgWidth * characters.wenda.xRelativeInitial &&
        clickX <= imgWidth * characters.wenda.xRelativeFinal &&
        clickY >= imgHeight * characters.wenda.yRelativeInitial &&
        clickY <= imgHeight * characters.wenda.yRelativeFinal
      ) {
        console.log("Wenda is here");
      }
      //Find Waldo
      else if (
        clickX >= imgWidth * characters.waldo.xRelativeInitial &&
        clickX <= imgWidth * characters.waldo.xRelativeFinal &&
        clickY >= imgHeight * characters.waldo.yRelativeInitial &&
        clickY <= imgHeight * characters.waldo.yRelativeFinal
      ) {
        console.log("Waldo is here");
      }
    });
  }

  function windowResize() {
    console.log("window resized");
  }
  window.onresize = windowResize;

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
