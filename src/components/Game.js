import React from "react";
import Header from "./Header";
import "../styles/Game.css";
import wheresWaldoImg from "../images/wheres-waldo.jpg";
import createCharacters, { charactersNames } from "../utility/characters";

//import secondsToTimeStr from "../utility/timer";
//import { Link } from "react-router-dom";

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

function Game() {
  return (
    <div className="Game">
      <Header type="game" />
      <div className="Game-content">
        <div className="Game-info">
          <Characters />
        </div>
        <img src={wheresWaldoImg} /*onClick={handleImgClick}*/ alt="" />
      </div>
    </div>
  );
}

export default Game;
