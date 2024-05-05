function addAndSubtract(num1, num2, num3) {
  function sum(num1, num2) {
    let summed = num1 + num2;
    return summed;
  }

  function subtract(num1, num2, num3) {
    let final = sum(num1, num2) - num3;
    return final;
  }
  let result = subtract(num1, num2, num3);
  console.log(result);
}

addAndSubtract(23, 6, 10);
