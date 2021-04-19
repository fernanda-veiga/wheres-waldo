import React from "react";
import Header from "./Header";
import "../styles/Game.css";
import wheresWaldoImg from "../images/wheres-waldo.jpg";
import createCharacters, { charactersNames } from "../utility/characters";

//import secondsToTimeStr from "../utility/timer";
//import { Link } from "react-router-dom";

function Character(props) {
  const characters = createCharacters();

  return (
    <div className="Game-info-character">
      <img
        className={"Game-info-character-img"}
        id={"Game-info-character-img-" + props.character}
        src={characters[props.character].img}
        alt={props.character + " avatar"}
      />
      {/*<p
        className={"Game-info-character-text"}
        id={"Game-info-character-text-" + props.character}
      >
        {props.character.charAt(0).toUpperCase() + props.character.slice(1)}
      </p>*/}
    </div>
  );
}

function Game() {
  return (
    <div className="Game">
      <Header type="game" />
      <div className="Game-content">
        <div className="Game-info">
          {charactersNames.map((character) => (
            <Character character={character} />
          ))}
        </div>
        <img src={wheresWaldoImg} /*onClick={handleImgClick}*/ alt="" />
      </div>
    </div>
  );
}

export default Game;
