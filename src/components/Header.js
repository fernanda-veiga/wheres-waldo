import React from "react";
import "../styles/Header.css";
import waldoLogo from "../images/waldo-logo.png";
import odlaw from "../images/odlaw.png";
import waldo from "../images/waldo.png";
import wenda from "../images/wenda.png";
import wizard from "../images/wizard.png";

function Character(props) {
  return (
    <div className="Character-div">
      <img src={props.img} alt={`${props.name} avatar`} />
      <p>{props.name}</p>
    </div>
  );
}

function Header() {
  return (
    <header className="Header">
      <div className="Header-left">
        <img src={waldoLogo} alt="Waldo" />
        <h1>Where's Waldo</h1>
      </div>
      <div className="Header-right">
        <Character img={odlaw} name={"Odlaw"} />
        <Character img={waldo} name={"Waldo"} />
        <Character img={wenda} name={"Wenda"} />
        <Character img={wizard} name={"Wizard"} />
        <p className="Header-timer">00:00</p>
      </div>
    </header>
  );
}

export default Header;
