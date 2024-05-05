function trackWords(input) {
  const [wordsToTrack, ...textToSearch] = input;
  const wordsCount = [];
  wordsToTrack.split(" ").forEach((word) => {
    const occur = textToSearch.reduce((acc, curr) => {
      if (curr === word) {
        acc++;
      }
      return acc;
    }, 0);
    wordsCount.push({
      word,
      occur,
    });
  });

  wordsCount
    .sort((a, b) => b.occur - a.occur)
    .forEach((word) => {
      console.log(`${word.word} - ${word.occur}`);
    });
}

trackWords([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
