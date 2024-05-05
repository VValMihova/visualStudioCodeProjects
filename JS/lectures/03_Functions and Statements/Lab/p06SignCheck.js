function signCheck(...input) {
  let result = "";
  let negativeNumberCounter = input.filter((element) => element < 0);
  if (
    negativeNumberCounter.length === 1 ||
    negativeNumberCounter.length === 3
  ) {
    result = "Negative";
  } else {
    result = "Positive";
  }

  console.log(result);
}

signCheck(-6, -12, 14);
