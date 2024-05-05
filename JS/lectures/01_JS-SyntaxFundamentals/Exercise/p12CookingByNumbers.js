function coockingByNumbers(
  number,
  operation1,
  operation2,
  operation3,
  operation4,
  operation5
) {
  let startNumber = Number(number);
  let operations = [operation1, operation2, operation3, operation4, operation5];
  let currentResult = startNumber;

  for (let index = 0; index < operations.length; index++) {
    let currentOperation = operations[index];
    switch (currentOperation) {
      case "chop":
        currentResult = currentResult / 2;
        break;
      case "dice":
        currentResult = Math.sqrt(currentResult);
        break;
      case "spice":
        currentResult = currentResult + 1;
        break;
      case "bake":
        currentResult = currentResult * 3;
        break;
      case "fillet":
        currentResult = currentResult * 0.8;
        break;
    }
    console.log(currentResult);
  }
}

coockingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
