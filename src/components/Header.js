import React from "react";
import "../styles/Header.css";
import waldoLogo from "../images/waldo-logo.png";
import odlaw from "../images/odlaw.png";
import waldo from "../images/waldo.png";
import wenda from "../images/wenda.png";
import wizard from "../images/wizard.png";
import secondsToTimeStr from "../utility/timer";

function Character(props) {
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
      {props.type === "homepage" ? (
        <div className="Header-right">
          <button type="button" className="Header-leaderboard">
            Leaderboard
          </button>
        </div>
      ) : (
        <div className="Header-right">
          <Character img={odlaw} name={"odlaw"} />
          <Character img={waldo} name={"waldo"} />
          <Character img={wenda} name={"wenda"} />
          <Character img={wizard} name={"wizard"} />
          <div className="Header-right-timer">
            {secondsToTimeStr(props.time)}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
