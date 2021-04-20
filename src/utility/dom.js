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

function hideHighlight() {
  const highlight = document.querySelector(".Highlight-circle");
  highlight.style.display = "none";
}

function makeCharacterGray(character) {
  const headerCharacterImg = document.querySelector(
    "#Game-info-character-img-" + character
  );
  headerCharacterImg.style.filter = "grayscale(100%)";
}

function showInfoBox() {
  const infoBox = document.querySelector(".Game-info-box");
  infoBox.style.top = "220px";
  infoBox.style.opacity = "1";

  setTimeout(() => {
    infoBox.style.top = "150px";
    infoBox.style.opacity = "0";
  }, 5000);
}

function handleStartGameDom() {
  document.querySelector(".Game-popup-container").style.display = "none";
  document
    .querySelectorAll(".Highlight-btn")
    .forEach((btn) => (btn.disabled = false));
}

function handleEndGameDom() {
  document.querySelector(".Game-end-popup-container").style.display = "flex";
}

function handlePlayAgainDom() {
  document.querySelector(".Game-popup-container").style.display = "flex";
  document.querySelector(".Game-end-popup-container").style.display = "none";
  document
    .querySelectorAll(".Game-info-character-img")
    .forEach((img) => (img.style.filter = "none"));
}

export {
  showHighlight,
  hideHighlight,
  makeCharacterGray,
  showInfoBox,
  handleStartGameDom,
  handleEndGameDom,
  handlePlayAgainDom,
};
