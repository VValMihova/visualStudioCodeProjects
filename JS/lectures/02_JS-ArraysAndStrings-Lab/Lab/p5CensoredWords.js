function censoreWords(text, wordToReplace) {
  let changedWord = "";
  for (let i = 0; i < wordToReplace.length; i++) {
    changedWord += "*";
  }

  let censoredText = text.replace(wordToReplace, changedWord);
  while (censoredText.includes(wordToReplace)) {
    censoredText = censoredText.replace(wordToReplace, changedWord);
  }

  console.log(censoredText);
}

censoreWords("Find the hidden word", "hidden");
