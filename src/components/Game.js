import React, { useState } from "react";

//Components
import Header from "./Header";
import Characters from "./game-components/Characters";
import Popup from "./game-components/Popup";
import Highlight from "./game-components/Highlight";

//Utility
import createCharacters, { charactersNames } from "../utility/characters";
import showHighlight from "../utility/highlight";

//Images
import wheresWaldoImg from "../images/wheres-waldo.jpg";

//CSS
import "../styles/Game.css";

//import secondsToTimeStr from "../utility/timer";

function Game() {
  const [click, setClick] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 });
  const [startTime, setStartTime] = useState({});

  function startGame() {
    document.querySelector(".Game-popup-container").style.display = "none";
    setStartTime(new Date());
  }

  function handleImgClick(event) {
    setClick({ x: event.pageX, y: event.pageY });
    setImgSize({ w: event.target.offsetWidth, h: event.target.offsetHeight });
    showHighlight({ x: event.pageX, y: event.pageY });
  }

  return (
    <div className="Game">
      <Header type="game" />
      <div className="Game-content">
        <Highlight />
        <div className="Game-info">
          <Characters />
        </div>
        <Popup startGame={startGame} />
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
