import React, { useState, useEffect } from "react";
import wheresWaldoImg from "../images/wheres-waldo.jpg";
import "../styles/App.css";
import Highlight from "./Highlight";
import Header from "./Header";
import showHighlight from "../utility/highlight";

import { differenceInSeconds } from "date-fns";

function App() {
  const [clickX, setClickX] = useState(0);
  const [clickY, setClickY] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);

  function handleImgClick(event) {
    setClickX(event.pageX);
    setClickY(event.pageY);
    setImgWidth(event.target.offsetWidth);
    setImgHeight(event.target.offsetHeight);
    showHighlight(event);
  }

  useEffect(() => {
    const initialTime = new Date();
    const timer = document.querySelector(".Header-right-timer");
    const timerID = setInterval(() => {
      const fullSeconds = differenceInSeconds(new Date(), initialTime);
      const minutes =
        Math.floor(fullSeconds / 60) < 10
          ? `0${Math.floor(fullSeconds / 60)}`
          : `${Math.floor(fullSeconds / 60)}`;
      const seconds =
        fullSeconds % 60 < 10 ? `0${fullSeconds % 60}` : `${fullSeconds % 60}`;
      timer.innerHTML = `${minutes}:${seconds}`;
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="Odlaw"></div>
      <div className="Wizard"></div>
      <div className="Waldo"></div>
      <div className="Wanda"></div>
      <Highlight
        clickX={clickX}
        clickY={clickY}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
      />
      <img src={wheresWaldoImg} onClick={handleImgClick} alt="" />
    </div>
  );
}

export default App;
