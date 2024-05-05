function radioCrystals(input) {
  let [targetThickness, ...chucksThickness] = input;

  for (let index = 0; index < chucksThickness.length; index++) {
    let current = chucksThickness[index];

    console.log(`Processing chunk ${current} microns`);

    while (current > targetThickness) {
      if (current / 4 >= targetThickness) {
        current = cutting(current);
        current = transportingAndWashing(current);
        continue;
      }

      if (current - current * 0.2 >= targetThickness) {
        current = lapping(current);
        current = transportingAndWashing(current);
        continue;
      }

      if (current - 20 >= targetThickness) {
        current = grinding(current);
        current = transportingAndWashing(current);
        continue;
      }

      if (current - 2 >= targetThickness) {
        current = etching(current);
        current = transportingAndWashing(current);
        continue;
      }
    }
    if (current + 1 === targetThickness) {
      current = xRay(current);
    }

    if (current === targetThickness) {
      console.log(`Finished crystal ${current} microns`);
    }
  }

  function xRay(current) {
    current = current + 1;
    console.log("X-ray x1");
    return current;
  }

  function etching(current) {
    let etchCounter = 0;
    while (
      current - 2 >= targetThickness ||
      current - 2 === targetThickness - 1
    ) {
      current -= 2;
      etchCounter++;
    }
    console.log(`Etch x${etchCounter}`);
    return current;
  }

  function grinding(current) {
    let grindCounter = 0;
    while (current - 20 >= targetThickness) {
      current -= 20;
      grindCounter++;
    }
    console.log(`Grind x${grindCounter}`);
    return current;
  }

  function lapping(current) {
    let lapCounter = 0;
    while (current - current * 0.2 >= targetThickness) {
      current = current - current * 0.2;
      lapCounter++;
    }
    console.log(`Lap x${lapCounter}`);
    return current;
  }

  function cutting(current) {
    let cutCounter = 0;
    while (current / 4 >= targetThickness) {
      current = current / 4;
      cutCounter++;
    }
    console.log(`Cut x${cutCounter}`);
    return current;
  }

  function transportingAndWashing(current) {
    console.log("Transporting and washing");
    current = Math.floor(current);
    return current;
  }
}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);
