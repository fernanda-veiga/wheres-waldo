import React from "react";
import "../../styles/Highlight.css";
import createCharacters, { charactersNames } from "../../utility/characters";
//import odlaw from "../images/odlaw.png";
//import waldo from "../images/waldo.png";
//import wenda from "../images/wenda.png";
//import wizard from "../images/wizard.png";
//import checkCharacter from "../utility/character";
//import { addCircle } from "../../utility/highlight";
//import getCharacters from "../../firebase";

function Highlight() {
  const characters = createCharacters();

  return (
    <div className="Highlight-circle">
      <span className="Highlight-menu">
        {charactersNames.map((character) => {
          return (
            <button
              className={"Highlight-btn"}
              id={"Highlight-btn-" + character}
            >
              <img
                src={characters[character].img}
                alt={character + " avatar"}
              />
              <p>{character.charAt(0).toUpperCase() + character.slice(1)}</p>
            </button>
          );
        })}
      </span>
    </div>
  );
}

export default Highlight;

/*<div className="Highlight-circle">
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
    </div>*/
