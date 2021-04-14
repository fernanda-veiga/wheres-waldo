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

export default showHighlight;
