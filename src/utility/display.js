function changeCharacterDisplay(character) {
  const highlightSquare = document.querySelector(".Highlight-square");
  const headerCharacterImg = document.querySelector(
    ".Header-" + character + "-img"
  );
  const headerCharacterName = document.querySelector(
    ".Header-" + character + "-name"
  );

  highlightSquare.style.display = "none";
  headerCharacterImg.style.filter = "grayscale(100%)";
  headerCharacterName.style.textDecoration = "line-through #ec2623 3px";
}

export default changeCharacterDisplay;
