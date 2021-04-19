import React from "react";
import Header from "./Header";
import "../styles/Game.css";
import wheresWaldoImg from "../images/wheres-waldo.jpg";

//import "../styles/Header.css";
//import odlaw from "../images/odlaw.png";
//import waldo from "../images/waldo.png";
//import wenda from "../images/wenda.png";
//import wizard from "../images/wizard.png";
//import secondsToTimeStr from "../utility/timer";
//import { Link } from "react-router-dom";

/*function Character(props) {
  return (
    <div className="Header-right-character">
      <img
        className={"Header-" + props.name + "-img"}
        src={props.img}
        alt={props.name + " avatar"}
      />
      <p className={"Header-" + props.name + "-name"}>
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </p>
    </div>
  );
}

function Header(props) {
  return (
    <header className="Header">
      <div className="Header-left">
        <img src={waldoLogo} alt="Waldo" />
        <h1>Where's Waldo</h1>
      </div>
      <div className="Header-right">
        <Character img={odlaw} name={"odlaw"} />
        <Character img={waldo} name={"waldo"} />
        <Character img={wenda} name={"wenda"} />
        <Character img={wizard} name={"wizard"} />
        <div className="Header-right-timer">
          00:00
          {/*secondsToTimeStr(props.time)*
        </div>
      </div>
    </header>
  );
}*/

function Game() {
  return (
    <div className="Game">
      <Header type="game" />
      <img src={wheresWaldoImg} /*onClick={handleImgClick}*/ alt="" />
    </div>
  );
}

export default Game;
