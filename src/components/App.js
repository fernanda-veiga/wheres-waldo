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

  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerID = setInterval(getTime, 1000);

    function getTime() {
      setTime(time + 1);
    }

    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div className="App">
      <Header time={time} />
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
