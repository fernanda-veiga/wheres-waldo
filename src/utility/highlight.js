function showHighlight(event) {
  const clickX = event.pageX;
  const clickY = event.pageY;
  const characterSquare = document.querySelector(".Highlight-square");

  if (
    window.getComputedStyle(characterSquare).getPropertyValue("display") ===
    "none"
  ) {
    characterSquare.style.display = "block";
    characterSquare.style.top = `${clickY}px`;
    characterSquare.style.left = `${clickX}px`;
    characterSquare.style.transform = `translate(-${
      characterSquare.offsetWidth / 2
    }px, -${characterSquare.offsetHeight / 2}px)`;
  } else {
    characterSquare.style.display = "none";
  }
}

/*function showHighlight(event) {
  //const imgWidth = event.target.offsetWidth;
  //const imgHeight = event.target.offsetHeight;
  const clickX = event.pageX;
  const clickY = event.pageY;
  //let characters;

  //Add a square to the click
  const characterSquare = document.querySelector(".Highlight-square");
  if (
    window.getComputedStyle(characterSquare).getPropertyValue("display") ===
    "none"
  ) {
    characterSquare.style.display = "block";
    characterSquare.style.top = `${clickY}px`;
    characterSquare.style.left = `${clickX}px`;
    characterSquare.style.transform = `translate(-${
      characterSquare.offsetWidth / 2
    }px, -${characterSquare.offsetHeight / 2}px)`;
  } else {
    characterSquare.style.display = "none";
  }

  /*charactersDatabasePath.get().then((doc) => {
    characters = doc.data();

    //Find Wizard
    if (
      clickX >= imgWidth * characters.wizard.xRelativeInitial &&
      clickX <= imgWidth * characters.wizard.xRelativeFinal &&
      clickY >= imgHeight * characters.wizard.yRelativeInitial &&
      clickY <= imgHeight * characters.wizard.yRelativeFinal
    ) {
      console.log("Wizard is here");
    }
    //Find Odlaw
    else if (
      clickX >= imgWidth * characters.odlaw.xRelativeInitial &&
      clickX <= imgWidth * characters.odlaw.xRelativeFinal &&
      clickY >= imgHeight * characters.odlaw.yRelativeInitial &&
      clickY <= imgHeight * characters.odlaw.yRelativeFinal
    ) {
      console.log("Odlaw is here");
    }
    //Find Wenda
    else if (
      clickX >= imgWidth * characters.wenda.xRelativeInitial &&
      clickX <= imgWidth * characters.wenda.xRelativeFinal &&
      clickY >= imgHeight * characters.wenda.yRelativeInitial &&
      clickY <= imgHeight * characters.wenda.yRelativeFinal
    ) {
      console.log("Wenda is here");
    }
    //Find Waldo
    else if (
      clickX >= imgWidth * characters.waldo.xRelativeInitial &&
      clickX <= imgWidth * characters.waldo.xRelativeFinal &&
      clickY >= imgHeight * characters.waldo.yRelativeInitial &&
      clickY <= imgHeight * characters.waldo.yRelativeFinal
    ) {
      console.log("Waldo is here");
    }
  });
}*/

export default showHighlight;
