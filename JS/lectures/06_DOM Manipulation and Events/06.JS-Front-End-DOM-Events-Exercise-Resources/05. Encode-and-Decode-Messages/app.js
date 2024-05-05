function encodeAndDecodeMessages() {
  const btns = document.querySelectorAll("#main div button");
  const encodeBtn = btns[0];
  const decodeBtn = btns[1];

  const inputText = document.querySelectorAll("#main div textarea")[0];
  const outputText = document.querySelectorAll("#main div textarea")[1];

  encodeBtn.addEventListener("click", encodeMessage);

  function encodeMessage() {
    const beginningMessage = Array.from(inputText.value);
    let finalMessage = "";

    beginningMessage.forEach((char) => {
      finalMessage += String.fromCharCode(char.charCodeAt(0) + 1);
    });
    inputText.value = "";
    outputText.value = finalMessage;
  }

  decodeBtn.addEventListener("click", decodeMessage);

  function decodeMessage() {
    const beginningMessage = Array.from(outputText.value);
    let finalMessage = "";
    beginningMessage.forEach((char) => {
      finalMessage += String.fromCharCode(char.charCodeAt(0) - 1);
    });

    outputText.value = finalMessage;
  }
}
