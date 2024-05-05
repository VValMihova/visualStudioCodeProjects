function sortNamesAlphabeticaly(array) {
  array.sort((a,b) => a.localeCompare(b));
  let number = 1;
  array.forEach(element => {
    console.log(`${number}.${element}`);
    number++;
  });
}

sortNamesAlphabeticaly(["John", "Bob", "Christina", "Ema"]);
