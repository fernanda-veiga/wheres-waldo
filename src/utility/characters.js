import odlaw from "../images/odlaw.png";
import waldo from "../images/waldo.png";
import wenda from "../images/wenda.png";
import wizard from "../images/wizard.png";

function createCharacters() {
  return {
    odlaw: { img: odlaw, found: false },
    waldo: { img: waldo, found: false },
    wenda: { img: wenda, found: false },
    wizard: { img: wizard, found: false },
  };
}

export default createCharacters;
