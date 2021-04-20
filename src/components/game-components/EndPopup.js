import React from "react";
//import createCharacters, { charactersNames } from "../../utility/characters";
//import wheresWaldoImg from "../../images/wheres-waldo.jpg";
import "../../styles/EndPopup.css";

function EndPopup(props) {
  //const characters = createCharacters();

  return (
    <div className="Game-end-popup-container">
      <div className="Game-end-popup">
        <p className="Game-end-popup-text">
          {"Congratulations! You found all characters in " + props.time + "."}
        </p>
        <input
          placeholder="Type your name"
          className="Game-end-popup-input"
        ></input>
        <div className="Game-end-popup-btn">
          <button className="Game-end-popup-btn-save">SAVE SCORE</button>
          <button
            className="Game-end-popup-btn-again"
            onClick={props.playAgain}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default EndPopup;
