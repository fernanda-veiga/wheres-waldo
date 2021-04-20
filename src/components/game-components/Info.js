import React from "react";
import "../../styles/Info.css";

function Info(props) {
  return (
    <span className="Game-info-box">
      <p>{props.msg}</p>
    </span>
  );
}

export default Info;
