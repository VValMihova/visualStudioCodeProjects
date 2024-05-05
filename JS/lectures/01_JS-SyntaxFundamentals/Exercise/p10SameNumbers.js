function sameNumbers(number) {
  let numberAsString = String(number);
  let firstNumberAsChar = numberAsString[0];
  let sum = 0;

  for (let index = 0; index < numberAsString.length; index++) {
    sum += Number(numberAsString[index]);
  }

  for (let index = 0; index < numberAsString.length; index++) {
    if (firstNumberAsChar !== numberAsString[index]) {
      console.log("false");
      console.log(sum);
      return;
    }
  }
  console.log("true");

  console.log(sum);
}

sameNumbers(1234);
