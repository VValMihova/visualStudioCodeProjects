function printAndSum(num1, num2) {
  let allNumbers = "";
  let sum = 0;
  for (let index = num1; index <= num2; index++) {
    allNumbers += index + " ";
    sum += index;
  }
  console.log(allNumbers);
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
