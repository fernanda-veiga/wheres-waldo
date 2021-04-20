import React from "react";
import createCharacters, { charactersNames } from "../../utility/characters";
import wheresWaldoImg from "../../images/wheres-waldo.jpg";
import "../../styles/Popup.css";

function Popup(props) {
  const characters = createCharacters();

  return (
    <div className="Game-popup-container">
      <div className="Game-popup">
        <img className="Game-popup-img" src={wheresWaldoImg} alt="" />
        <div className="Game-popup-info">
          <p>Find the following characters:</p>
          <div className="Game-popup-info-characters">
            {charactersNames.map((character) => (
              <div
                key={"Game-popup-info-character-" + character}
                className="Game-popup-info-character"
              >
                <img
                  src={characters[character].img}
                  alt={character + " avatar"}
                />
                <p>{character.charAt(0).toUpperCase() + character.slice(1)}</p>
              </div>
            ))}
          </div>
          <button onClick={props.startGame}>START</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
