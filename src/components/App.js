import React, { useState, useEffect } from "react";

//Components
import Game from "./Game";
import Leaderboard from "./Leaderboard";

//Packages
import { HashRouter, Switch, Route } from "react-router-dom";

//CSS
import "../styles/App.css";

//import wheresWaldoImg from "../images/wheres-waldo.jpg";
//
//import Highlight from "./Highlight";
//import Header from "./Header";
//import showHighlight from "../utility/highlight";
//import { hideHighlight, addCircle } from "../utility/highlight";
//import { getCharacters, updateCharacters } from "../firebase";
//import changeCharacterDisplay from "../utility/display";
//import { roundToNearestMinutes } from "date-fns";
//import createCharacters from "../utility/characters";
//
//import Homepage from "./Homepage";
//import Level01 from "./Level01";
//import { render } from "@testing-library/react";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/" component={Game} />
          <Route exact path="/leaderboard" component={Leaderboard} />
        </Switch>
      </div>
    </HashRouter>
  );
}

/*function App() {
  const [clickX, setClickX] = useState(0);
  const [clickY, setClickY] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [time, setTime] = useState(0);
  const [characters, setCharacters] = useState(createCharacters());
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  //const [found, setFound] = useState(false);

  useEffect(() => {
    const timerID = setInterval(getTime, 1000);
    console.log(timerID);

    function getTime() {
      setTime(time + 1);
    }

    function stopTimer() {
      clearInterval(timerID);
    }

    return stopTimer;
  });

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
      //clearInterval(timerID);
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
        //areAllCharactersFound(characters);
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
    <HashRouter basename="/">
      <div className="App">
        {/*<Header time={time} />*/
/*<Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/level01"
            render={(props) => (
              <Level01
                {...props}
                checkCharacter={checkCharacter}
                handleImgClick={handleImgClick}
              />
            )}
          />
          {/*<Route
            exact
            path="/shop"
            render={(props) => (
              <Shop
                {...props}
                handleChange={handleChange}
                addToCart={addToCart}
              />
            )}
            />*/
/* </Switch>
      </div>
    </HashRouter>
  );
}*/

/*<div className="App">
      <Header time={time} />
      <Highlight checkCharacter={checkCharacter} />
      <img src={wheresWaldoImg} onClick={handleImgClick} alt="" />
      {found === true ? <div>{`GAME OVER. The time is ${time}`}</div> : null}
            </div>*/

export default App;
