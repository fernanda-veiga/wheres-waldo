import React, { useState } from "react";
import Header from "./Header";
import Characters from "./game-components/Characters";
import StartPopup from "./game-components/StartPopup";
import EndPopup from "./game-components/EndPopup";
import Highlight from "./game-components/Highlight";
import Info from "./game-components/Info";
import createCharacters, { charactersNames } from "../utility/characters";
import {
  showHighlight,
  hideHighlight,
  makeCharacterGray,
  showInfoBox,
  handleStartGameDom,
  handleEndGameDom,
  handlePlayAgainDom,
} from "../utility/dom";
import { charactersDatabase } from "../firebase";
import calculateTimeSpent from "../utility/timer";
import wheresWaldoImg from "../images/wheres-waldo.jpg";
import "../styles/Game.css";

let characters = {};
let startTime = {};
let endTime = {};

const characterData = {};
charactersDatabase.get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    characterData[doc.id] = doc.data();
  });
});

function Game() {
  const [click, setClick] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 });
  const [time, setTime] = useState(0);
  const [infoMsg, setInfoMsg] = useState("");

  function startGame() {
    handleStartGameDom();
    characters = createCharacters();
    startTime = new Date();
    handleStopwatch();
  }

  function endGame() {
    handleEndGameDom();
  }

  function playAgain() {
    handlePlayAgainDom();
  }

  function handleImgClick(event) {
    setClick({ x: event.pageX, y: event.pageY });
    setImgSize({ w: event.target.offsetWidth, h: event.target.offsetHeight });
    showHighlight({ x: event.pageX, y: event.pageY });
  }

  function checkCharacter(event) {
    const character = event.target.id.slice(14);
    const HEADER_HEIGHT = 200;

    if (
      click.x >= imgSize.w * characterData[character].x[0] &&
      click.x <= imgSize.w * characterData[character].x[1] &&
      click.y >= imgSize.h * characterData[character].y[0] + HEADER_HEIGHT &&
      click.y <= imgSize.h * characterData[character].y[1] + HEADER_HEIGHT
    ) {
      event.target.disabled = true;
      handleCharacterFound(character);
    } else {
      handleCharacterNotFound();
    }

    hideHighlight();
  }

  function handleCharacterFound(character) {
    const characterNameUppercase =
      character.charAt(0).toUpperCase() + character.slice(1);

    characters[character].found = true;
    makeCharacterGray(character);
    setInfoMsg("You found " + characterNameUppercase + "!");
    showInfoBox();
    allCharactersFound();
  }

  function handleCharacterNotFound() {
    setInfoMsg("Try again!");
    showInfoBox();
  }

  function allCharactersFound() {
    if (
      charactersNames.every((character) => characters[character].found === true)
    ) {
      endGame();
    }
  }

  function handleStopwatch() {
    const stopwatch = document.querySelector(".stopwatch");
    const stopwatchTimer = setInterval(() => {
      stopwatch.innerHTML = calculateTimeSpent(new Date(), startTime);
      if (
        charactersNames.every(
          (character) => characters[character].found === true
        )
      ) {
        endTime = new Date();
        setTime(calculateTimeSpent(endTime, startTime));
        stopwatch.innerHTML = calculateTimeSpent(endTime, startTime);
        clearInterval(stopwatchTimer);
      }
    }, 1000);
  }

  return (
    <div className="Game">
      <Header type="game" />
      <div className="Game-content">
        <Highlight checkCharacter={checkCharacter} />
        <Info msg={infoMsg} />
        <div className="Game-info">
          <Characters />
          <div className="stopwatch">00:00:00</div>
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
