function search() {
  let searchField = document.querySelector("#searchText").value;
  let towns = Array.from(document.querySelectorAll("li"));
  let result = document.getElementById("result");

  let counter = 0;

  for (const town of towns) {
      town.style.textDecoration = "";
      town.style.fontWeight = "";

  }
  for (const town of towns) {
    if (town.textContent.includes(searchField)) {
      town.style.textDecoration = "underline";
      town.style.fontWeight = "bold";
      counter++;
    }
  }

  result.textContent = counter + " matches found";
}
