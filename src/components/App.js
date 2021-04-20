import React /*, { useState, useEffect }*/ from "react";

//Components
import Game from "./Game";
import Leaderboard from "./Leaderboard";

//Utility
import { HashRouter, Switch, Route } from "react-router-dom";

//CSS
import "../styles/App.css";

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

export default App;
