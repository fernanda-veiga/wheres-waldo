import React from "react";
import createCharacters, { charactersNames } from "../../utility/characters";

function Characters() {
  const characters = createCharacters();

  return (
    <div className="Game-info-character">
      {charactersNames.map((character) => (
        <img
          className="Game-info-character-img"
          id={"Game-info-character-img-" + character}
          src={characters[character].img}
          alt={character + " avatar"}
        />
      ))}
    </div>
  );
}

export default Characters;
