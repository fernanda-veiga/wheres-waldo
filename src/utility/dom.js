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

function changeElementDisplay(character) {
  const highlightSquare = document.querySelector(".Highlight-circle");
  const headerCharacterImg = document.querySelector(
    "#Game-info-character-img-" + character
  );

  highlightSquare.style.display = "none";
  headerCharacterImg.style.filter = "grayscale(100%)";
}

export { showHighlight, changeElementDisplay };
