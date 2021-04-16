import React, { useState, useEffect } from "react";
import wheresWaldoImg from "../images/wheres-waldo.jpg";
import "../styles/App.css";
import Highlight from "./Highlight";
import Header from "./Header";
import showHighlight from "../utility/highlight";
import { hideHighlight, addCircle } from "../utility/highlight";
import { getCharacters, updateCharacters } from "../firebase";
import changeCharacterDisplay from "../utility/display";
import { roundToNearestMinutes } from "date-fns";
import createCharacters from "../utility/characters";

function App() {
  const [clickX, setClickX] = useState(0);
  const [clickY, setClickY] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [time, setTime] = useState(0);
  const [characters, setCharacters] = useState(createCharacters());
  const [found, setFound] = useState(false);

  /*useEffect(() => {
    getCharacters().then((doc) => {
      setCharacters(doc.data());
    });
  }, []);*/

  let timerID;
  useEffect(() => {
    timerID = setInterval(getTime, 1000);
    console.log(timerID);

    function getTime() {
      setTime(time + 1);
    }

    function stopTimer() {
      clearInterval(timerID);
    }

    return stopTimer;
  });
  console.log(timerID);

  //Functions that change state
  function handleImgClick(event) {
    setClickX(event.pageX);
    setClickY(event.pageY);
    setImgWidth(event.target.offsetWidth);
    setImgHeight(event.target.offsetHeight);
    showHighlight(event);
  }

  function changeCharacterFoundStatus(character) {
    const newCharacters = { ...characters };
    newCharacters[character].found = true;
    setCharacters(newCharacters);
  }

  function areAllCharactersFound() {
    console.log(found);
    if (
      characters.odlaw.found &&
      characters.waldo.found &&
      characters.wenda.found &&
      characters.wizard.found
    ) {
      clearInterval(timerID);
      setFound(true);
      console.log(found);
      console.log(time);
    }
  }

  //Check if character is correct
  function checkCharacter(event) {
    const character = event.target.className.slice(10);

    getCharacters(character).then((doc) => {
      const characterData = doc.data();

      //const characterData = characters[character];

      if (
        clickX >= imgWidth * characterData.x[0] &&
        clickX <= imgWidth * characterData.x[1] &&
        clickY >= imgHeight * characterData.y[0] &&
        clickY <= imgHeight * characterData.y[1]
      ) {
        handleFindingCharacter(character);
        areAllCharactersFound(characters);
        event.target.disabled = true;
      }
    });
  }

  function handleFindingCharacter(character) {
    addCircle(clickX, clickY);
    changeCharacterFoundStatus(character);
    //updateCharacters(character, true);
    changeCharacterDisplay(character);
  }

  return (
    <div className="App">
      <Header time={time} />
      <Highlight checkCharacter={checkCharacter} />
      <img src={wheresWaldoImg} onClick={handleImgClick} alt="" />
      {found === true ? <div>{`GAME OVER. The time is ${time}`}</div> : null}
    </div>
  );
}

export default App;
