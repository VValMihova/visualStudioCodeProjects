function getFactorialDivision(num1, num2) {
  let firstNumFactorial = sumFactorial(num1);
  let secondNumFactorial = sumFactorial(num2);
  let output = firstNumFactorial / secondNumFactorial;
  console.log(output.toFixed(2));

  function sumFactorial(number) {
    let finalNumber = 1;
    for (let i = 1; i <= number; i++) {
      finalNumber *= i;
    }
    return finalNumber;
  }
}

getFactorialDivision(5, 2);
