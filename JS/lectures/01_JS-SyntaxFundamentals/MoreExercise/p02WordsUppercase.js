function wordsUppercase(input) {
  const result = input
    .split(/[\W]+/)
    .filter((word) => word.length >= 1)
    .map((word) => word.toUpperCase())
    .join(", ");
  console.log(result);
}

wordsUppercase("Functions in JS can be nested, i.e. hold other functions");
