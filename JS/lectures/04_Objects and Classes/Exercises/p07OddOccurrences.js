function countOddOccurrences(input) {
  const lower = input.toLowerCase().split(" ");
  const countOccurr = new Map();

  lower.forEach((element) => {
    countOccurr.has(element)
      ? countOccurr.set(element, countOccurr.get(element) + 1)
      : countOccurr.set(element, 1);
  });
  let output = [];
  for (const [key, value] of countOccurr) {
    if (value % 2 !== 0) {
      output.push(key);
    }
  }
  console.log(output.join(" "));
}

countOddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
