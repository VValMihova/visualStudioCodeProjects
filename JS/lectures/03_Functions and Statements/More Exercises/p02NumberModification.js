function numberModification(number) {
  let modifiedNumber = number;

  while (sumAverage(modifiedNumber) < 5) {
    modifiedNumber = Number(String(modifiedNumber) + 9);
  }
  console.log(modifiedNumber);

  function sumAverage(n) {
    let sum = 0;
    let numberAsString = String(n);

    for (let index = 0; index < numberAsString.length; index++) {
      let current = Number(numberAsString[index]);
      sum += current;
    }

    return sum / numberAsString.length;
  }
}

numberModification(101);
numberModification(5835);
