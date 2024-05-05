function solve() {
  let inputField = document.querySelector("#input").value;
  let outputElement = document.getElementById("output");

  let sentenses = inputField.split(".");
  sentenses = sentenses
  .filter((s) => s.length > 0)
  .map((s) => (s += "."));

  while (sentenses.length > 0) {

    let p = document.createElement("p");
    p.textContent = sentenses.splice(0, 3).join(" ");
    outputElement.appendChild(p);
  }
}
