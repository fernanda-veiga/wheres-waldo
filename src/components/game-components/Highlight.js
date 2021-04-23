import React from "react";
import "../../styles/Highlight.css";
import createCharacters, { charactersNames } from "../../utility/characters";

function Highlight(props) {
  const characters = createCharacters();

  return (
    <div className="Highlight-circle">
      <span className="Highlight-menu">
        {charactersNames.map((character) => {
          return (
            <button
              key={"Highlight-btn-" + character}
              className={"Highlight-btn"}
              id={"Highlight-btn-" + character}
              onClick={props.checkCharacter}
            >
              <img
                src={characters[character].img}
                alt={character + " avatar"}
              />
              <p>{character.charAt(0).toUpperCase() + character.slice(1)}</p>
            </button>
          );
        })}
      </span>
    </div>
  );
}

export default Highlight;
