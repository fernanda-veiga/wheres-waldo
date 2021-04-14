import React from "react";
import "../styles/Highlight.css";
import odlaw from "../images/odlaw.png";
import waldo from "../images/waldo.png";
import wenda from "../images/wenda.png";
import wizard from "../images/wizard.png";

function Highlight() {
  return (
    <div className="Highlight-square">
      <span className="Highlight-menu">
        <button className="Highlight-odlaw">
          <img src={odlaw} alt="Odlaw avatar" />
          Odlaw
        </button>
        <button className="Highlight-waldo">
          <img src={waldo} alt="Waldo avatar" />
          Waldo
        </button>
        <button className="Highlight-wenda">
          <img src={wenda} alt="Wenda avatar" />
          Wenda
        </button>
        <button className="Highlight-wizard">
          <img src={wizard} alt="Wizard avatar" />
          Wizard
        </button>
      </span>
    </div>
  );
}

export default Highlight;
