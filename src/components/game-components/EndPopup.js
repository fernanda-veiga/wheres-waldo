import React from "react";
import { storeLeaderboardData } from "../../firebase";
import "../../styles/EndPopup.css";
import { Link } from "react-router-dom";

function EndPopup(props) {
  return (
    <div className="Game-end-popup-container">
      <div className="Game-end-popup">
        <p className="Game-end-popup-text">
          {"Congratulations! You found all characters in " + props.time + "."}
        </p>
        <input
          type="text"
          maxLength="20"
          placeholder="Type your name"
          className="Game-end-popup-input"
        ></input>
        <div className="Game-end-popup-btn">
          <Link to="/leaderboard">
            <button
              className="Game-end-popup-btn-save"
              onClick={() => {
                storeLeaderboardData(props.time);
              }}
            >
              SAVE SCORE
            </button>
          </Link>
          <button
            className="Game-end-popup-btn-again"
            onClick={props.playAgain}
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default EndPopup;
