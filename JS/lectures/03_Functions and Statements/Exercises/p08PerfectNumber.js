function isNumberPerfect(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  number === sum
    ? console.log("We have a perfect number!")
    : console.log("It's not so perfect.");
}

isNumberPerfect(1236498);
