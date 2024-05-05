function carWash(commands) {
  let value = 0;
  for (const command of commands) {
    switch (command) {
      case "soap":
        value += 10;
        break;
      case "water":
        value += value * 0.2;
        break;
      case "vacuum cleaner":
        value += value * 0.25;
        break;
      case "mud":
        value -= value * 0.1;
        break;
    }
  }
  let finalValue = value.toFixed(2);
  console.log(`The car is ${finalValue}% clean.`);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
