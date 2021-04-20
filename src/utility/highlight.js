function showHighlight(click) {
  const highlight = document.querySelector(".Highlight-circle");
  const highlightMenu = document.querySelector(".Highlight-menu");

  if (
    window.getComputedStyle(highlight).getPropertyValue("display") === "none"
  ) {
    highlight.style.display = "block";
    highlight.style.top = click.y + "px";
    highlight.style.left = click.x + "px";
  } else {
    highlight.style.display = "none";
  }

  if (click.y < window.innerHeight - 300) {
    highlightMenu.style.top = "120%";
    highlightMenu.style.bottom = "auto";
  } else {
    highlightMenu.style.top = "auto";
    highlightMenu.style.bottom = "120%";
  }
}

/*function hideHighlight(event) {
  const characterSquare = document.querySelector(".Highlight-square");
  characterSquare.style.display = "none";
}

function addCircle(clickX, clickY) {
  const circle = document.createElement("div");
  circle.classList.add("Highlight-circle");
  circle.style.top = `${clickY}px`;
  circle.style.left = `${clickX}px`;
  document.querySelector(".App").appendChild(circle);
}*/

export default showHighlight;
//export { hideHighlight, addCircle };
