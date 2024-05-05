function countStringOccurrences(text, wordToCount) {
  let textArr = text.split(" ");
  let counter = 0;

  textArr.forEach((element) => {
    if (element === wordToCount) {
      counter++;
    }
  });
  console.log(counter);
}

countStringOccurrences("This is a word and it also is a sentence", "is");
