import React, { useState } from "react";

//Components
import Header from "./Header";
import Characters from "./game-components/Characters";
import StartPopup from "./game-components/StartPopup";
import EndPopup from "./game-components/EndPopup";
import Highlight from "./game-components/Highlight";

//Utility
import createCharacters, { charactersNames } from "../utility/characters";
import { showHighlight, changeElementDisplay } from "../utility/dom";
import { getCharacters } from "../firebase";
import calculateTimeSpent from "../utility/timer";

//Images
import wheresWaldoImg from "../images/wheres-waldo.jpg";

//CSS
import "../styles/Game.css";

let characters = {};
let startTime = {};
let endTime = {};

function Game() {
  const [click, setClick] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 });
  const [time, setTime] = useState(0);
  //const [startTime, setStartTime] = useState({});
  //const [endTime, setEndTime] = useState({});

  //console.log(characters);

  function startGame() {
    document.querySelector(".Game-popup-container").style.display = "none";
    document
      .querySelectorAll(".Highlight-btn")
      .forEach((btn) => (btn.disabled = false));
    characters = createCharacters();
    startTime = new Date();
  }

  function handleImgClick(event) {
    setClick({ x: event.pageX, y: event.pageY });
    setImgSize({ w: event.target.offsetWidth, h: event.target.offsetHeight });
    showHighlight({ x: event.pageX, y: event.pageY });
  }

  function checkCharacter(event) {
    const character = event.target.id.slice(14);

    getCharacters(character).then((doc) => {
      const characterData = doc.data();
      const HEADER_HEIGHT = 200;

      if (
        click.x >= imgSize.w * characterData.x[0] &&
        click.x <= imgSize.w * characterData.x[1] &&
        click.y >= imgSize.h * characterData.y[0] + HEADER_HEIGHT &&
        click.y <= imgSize.h * characterData.y[1] + HEADER_HEIGHT
      ) {
        console.log("character found");
        event.target.disabled = true;
        characterFound(character);
        changeElementDisplay(character);
        allCharactersFound();
      }
    });
  }

  function characterFound(character) {
    characters[character].found = true;
  }

  function allCharactersFound() {
    if (
      charactersNames.every((character) => characters[character].found === true)
    ) {
      console.log("All characters found");
      //setEndTime(new Date());
      endGame();
    }
  }

  function endGame() {
    endTime = new Date();
    setTime(calculateTimeSpent(endTime, startTime));
    document.querySelector(".Game-end-popup-container").style.display = "flex";
  }

  function playAgain() {
    document.querySelector(".Game-popup-container").style.display = "flex";
    document.querySelector(".Game-end-popup-container").style.display = "none";
    document
      .querySelectorAll(".Game-info-character-img")
      .forEach((img) => (img.style.filter = "none"));
  }

  return (
    <div className="Game">
      <Header type="game" />
      <div className="Game-content">
        <Highlight checkCharacter={checkCharacter} />
        <div className="Game-info">
          <Characters />
        </div>
        <StartPopup startGame={startGame} />
        <EndPopup time={time} playAgain={playAgain} />
        <img
          className="Game-img"
          src={wheresWaldoImg}
          onClick={handleImgClick}
          alt=""
        />
      </div>
    </div>
  );
}

export default Game;
