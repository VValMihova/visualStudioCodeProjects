function calculateMoneyForFruits(typeOfFruit, weightInGrams, pricePerKg) {
  let kg = weightInGrams / 1000;
  let money = pricePerKg * kg;

  console.log(
    `I need $${money.toFixed(2)} to buy ${kg.toFixed(
      2
    )} kilograms ${typeOfFruit}.`
  );
}

calculateMoneyForFruits("orange", 2500, 1.8);
