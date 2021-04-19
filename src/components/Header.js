import React from "react";
import "../styles/Header.css";
import waldoLogo from "../images/waldo-logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="Header">
      <div className="Header-left">
        <img src={waldoLogo} alt="Waldo" />
        <h1>Where's Waldo</h1>
      </div>
      <div className="Header-right">
        {props.type === "game" ? (
          <Link className="Header-right-link" to="/leaderboard">
            Leaderboard
          </Link>
        ) : (
          <Link className="Header-right-link" to="/">
            Play
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
