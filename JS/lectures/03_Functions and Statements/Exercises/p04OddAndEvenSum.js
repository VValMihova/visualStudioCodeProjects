function getOddAndEvenSum(number) {
  const numberAsString = String(number);
  let oddSum = 0;
  let evenSum = 0;
  
  for (let index = 0; index < numberAsString.length; index++) {
    let current = Number(numberAsString[index]);
    current % 2 === 0 ? (evenSum += current) : (oddSum += current);
  }
  console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

getOddAndEvenSum(1000435);
