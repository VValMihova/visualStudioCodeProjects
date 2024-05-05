function stringSubstring(word, text) {
  let textArr = text.split(" ");
  let caseInsensitiveArr = [];
  textArr.forEach((element) => caseInsensitiveArr.push(element.toLowerCase()));
  let output = caseInsensitiveArr.find((element) => element === word);
  if (typeof output !== "undefined") {
    console.log(output);
  } else {
    console.log(`${word} not found!`);
  }
}

stringSubstring('python',
'JavaScript is the best programming language'
);
