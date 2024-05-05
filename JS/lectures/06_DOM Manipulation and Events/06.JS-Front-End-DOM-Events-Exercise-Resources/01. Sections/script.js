function create(words) {
  //FOR EACH WORD FROM THE INPUT
  words.forEach((word) => {
    // CREATE DIV AND PARAGRAPH ELEMENTS
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");
    // SET PARAGRAPH TEXT CONTENT AND HIDE IT
    newP.textContent = word;
    newP.style.display = "none";
    // APPEND PARAGRAPH TO DIV
    newDiv.appendChild(newP);

    //SELECT MAIN DIV AND APPEND NEW DIV ELEMENTS TO IT
    let getContent = document.querySelector("#content");
    getContent.appendChild(newDiv);
  });

  // SELECT ALL NEW DIV ELEMENTS
  const divElements = Array.from(document.querySelectorAll("#content div"));

  // ADD EVENT LISTENER FOR EACH DIV
  divElements.forEach((div) => {
    div.addEventListener("click", displayParagraph);
  });

  //DISPLAY PARAGRAPH FUNCTION
  function displayParagraph(event) {
    // WHEN WE CLICK OVER THE DIV BOX IT IS THE TARGET SO WE SELECT ITS FIRST CHILD WHICH IS THE PARAGRAPH
    let target = event.currentTarget.children[0];
    target.style.display = "block";
  }
}
