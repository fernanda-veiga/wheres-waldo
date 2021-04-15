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

function addCircle(clickX, clickY) {
  const circle = document.createElement("div");
  circle.classList.add("Highlight-circle");
  circle.style.top = `${clickY}px`;
  circle.style.left = `${clickX}px`;
  document.querySelector(".App").appendChild(circle);
}

export default showHighlight;
export { addCircle };
