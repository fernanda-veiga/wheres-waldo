import React from "react";
import Header from "./Header";
import level01Img from "../images/wheres-waldo.jpg";
import odlaw from "../images/odlaw.png";
import waldo from "../images/waldo.png";
import wenda from "../images/wenda.png";
import wizard from "../images/wizard.png";
import "../styles/Homepage.css";

function LevelCard(props) {
  return (
    <div className={`Homepage-card-level-${props.level}`}>
      <img
        className="Homepage-card-img"
        src={level01Img}
        alt={`Where's Waldo Level ${props.level}`}
      />
      <span className="Homepage-card-text">
        <p>{`LEVEL ${props.level}`}</p>
        <span className="Homepage-card-characters">
          <img
            className="Homepage-card-character-img"
            src={odlaw}
            alt="Odlaw Avatar"
          />
          <img
            className="Homepage-card-character-img"
            src={waldo}
            alt="Waldo Avatar"
          />
          <img
            className="Homepage-card-character-img"
            src={wenda}
            alt="Wenda Avatar"
          />
          <img
            className="Homepage-card-character-img"
            src={wizard}
            alt="Wizard Avatar"
          />
        </span>
      </span>
    </div>
  );
}

function Homepage() {
  return (
    <div className="Homepage">
      <Header type={"homepage"} />
      <div className="Homepage-content">
        <LevelCard level="01" />
        <div className="Homepage-card-coming-soon">NEW LEVELS COMING SOON</div>
      </div>
    </div>
  );
}

export default Homepage;
