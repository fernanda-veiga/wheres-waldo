import React from "react";
import wheresWaldoImg from "../images/wheres-waldo.jpg";
import "../styles/App.css";

function App() {
  function handleClick(event) {
    const IMG_WIDTH = event.target.width;
    const IMG_HEIGHT = event.target.height;
    const CLICK_X = event.pageX;
    const CLICK_Y = event.pageY;

    //Find Wizard
    if (
      CLICK_X >= IMG_WIDTH * 0.0583 &&
      CLICK_X <= IMG_WIDTH * 0.0907 &&
      CLICK_Y >= IMG_HEIGHT * 0.7318 &&
      CLICK_Y <= IMG_HEIGHT * 0.7773
    ) {
      console.log("Wizard is here");
    }
  }

  function windowResize() {
    console.log("window resized");
  }
  window.onresize = windowResize;

  return (
    <div className="App">
      <div className="Odlaw"></div>
      <div className="Wizard"></div>
      <div className="Waldo"></div>
      <div className="Wanda"></div>
      <img src={wheresWaldoImg} onClick={handleClick} />
    </div>
  );
}

export default App;
