function solve() {
  let inputText = document.querySelector("#text").value.toLowerCase();
  let namingConvention = document.querySelector("#naming-convention").value;
  let result = document.querySelector("#result");

  let sentence = [];
  inputText = inputText.split(" ");

  if (namingConvention === "Camel Case") {
    sentence.push(inputText[0]);

    for (let i = 1; i < inputText.length; i++) {
      sentence.push(inputText[i].charAt(0).toUpperCase() + inputText[i].substring(1));
    }
    result.textContent = sentence.join("");

  } else if (namingConvention === "Pascal Case") {
    for (let i = 0; i < inputText.length; i++) {
      sentence.push(inputText[i].charAt(0).toUpperCase() + inputText[i].substring(1));
    }
    result.textContent = sentence.join("");
  } else {
    result.textContent = "Error!"
  }
}
