import React, { useState } from "react";

//Components
import Header from "./Header";

//Utility
import createCharacters, { charactersNames } from "../utility/characters";

//Images
import wheresWaldoImg from "../images/wheres-waldo.jpg";

//CSS
import "../styles/Game.css";
import "../styles/Popup.css";

//import secondsToTimeStr from "../utility/timer";

function Characters() {
  const characters = createCharacters();

  return (
    <div className="Game-info-character">
      {charactersNames.map((character) => (
        <img
          className="Game-info-character-img"
          id={"Game-info-character-img-" + character}
          src={characters[character].img}
          alt={character + " avatar"}
        />
      ))}
    </div>
  );
}

function Popup() {
  const characters = createCharacters();

  return (
    <div className="Game-popup-container">
      <div className="Game-popup">
        <img className="Game-popup-img" src={wheresWaldoImg} alt="" />
        <div className="Game-popup-info">
          <p>Find the following characters:</p>
          <div className="Game-popup-info-characters">
            {charactersNames.map((character) => (
              <div className="Game-popup-info-character">
                <img
                  src={characters[character].img}
                  alt={character + " avatar"}
                />
                <p>{character.charAt(0).toUpperCase() + character.slice(1)}</p>
              </div>
            ))}
          </div>
          <button>START</button>
        </div>
      </div>
    </div>
  );
}

function Game() {
  //const [click, setClick] = useState({ x: 0, y: 0 });
  //const [imgSize, setImgSize] = useState({ w: 0, h: 0 });

  return (
    <div className="Game">
      <Header type="game" />
      <div className="Game-content">
        <div className="Game-info">
          <Characters />
        </div>
        <Popup />
        <img
          className="Game-img"
          src={wheresWaldoImg}
          /*onClick={handleImgClick}*/ alt=""
        />
      </div>
    </div>
  );
}

export default Game;
