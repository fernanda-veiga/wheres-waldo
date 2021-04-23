import React from "react";
import Game from "./Game";
import Leaderboard from "./Leaderboard";
import { HashRouter, Switch, Route } from "react-router-dom";
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

export default App;
