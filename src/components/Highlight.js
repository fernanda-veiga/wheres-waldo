import React from "react";
import "../styles/Highlight.css";
import odlaw from "../images/odlaw.png";
import waldo from "../images/waldo.png";
import wenda from "../images/wenda.png";
import wizard from "../images/wizard.png";
//import checkCharacter from "../utility/character";
import { addCircle } from "../utility/highlight";
import getCharacters from "../firebase";

function Highlight(props) {
  /*let characters;
  getCharacters().then((doc) => {
    characters = doc.data();
  });

  function checkCharacter(event) {
    const character = event.target.className.slice(10);
    const clickX = props.clickX;
    const clickY = props.clickY;
    const imgWidth = props.imgWidth;
    const imgHeight = props.imgHeight;

    if (
      clickX >= imgWidth * characters[character].x[0] &&
      clickX <= imgWidth * characters[character].x[1] &&
      clickY >= imgHeight * characters[character].y[0] &&
      clickY <= imgHeight * characters[character].y[1]
    ) {
      addCircle(clickX, clickY);
      event.target.disabled = true;
      document.querySelector(".Highlight-square").style.display = "none";

      document.querySelector(".Header-" + character + "-img").style.filter =
        "grayscale(100%)";
      document.querySelector(
        ".Header-" + character + "-name"
      ).style.textDecoration = "line-through #ec2623 3px";
    }
  }

  function allCharactersFound() {
    const menu = document.querySelector(".Highlight-menu");
    const allButtons = Array.from(menu.querySelectorAll("button"));
    return allButtons.every((button) => button.disabled === true);
  }*/

  return (
    <div className="Highlight-square">
      <span className="Highlight-menu">
        <button className="Highlight-odlaw" onClick={props.checkCharacter}>
          <img src={odlaw} alt="Odlaw avatar" />
          Odlaw
        </button>
        <button className="Highlight-waldo" onClick={props.checkCharacter}>
          <img src={waldo} alt="Waldo avatar" />
          Waldo
        </button>
        <button className="Highlight-wenda" onClick={props.checkCharacter}>
          <img src={wenda} alt="Wenda avatar" />
          Wenda
        </button>
        <button className="Highlight-wizard" onClick={props.checkCharacter}>
          <img src={wizard} alt="Wizard avatar" />
          Wizard
        </button>
      </span>
    </div>
  );
}

export default Highlight;
