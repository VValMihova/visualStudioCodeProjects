function revealWords(words, template) {
  let wordsArr = words.split(", ");

  for (let index = 0; index < wordsArr.length; index++) {
    let currentWord = wordsArr[index];
    let word = "";
    let currentToReveal = word.padEnd(currentWord.length, "*");

    template = template.replace(currentToReveal, currentWord);
  }
  console.log(template);
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
