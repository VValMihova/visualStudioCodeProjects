function piccolo(input) {
  const parking = new Set();
  input.forEach((line) => {
    const [direction, carNumber] = line.split(", ");
    if (direction === "IN") {
      parking.add(carNumber);
    } else if (direction === "OUT") {
      if (parking.has(carNumber)) {
        parking.delete(carNumber);
      }
    }
  });

  parking.length < 1
    ? console.log("Parking Lot is Empty")
    : Array.from(parking)
        .sort((a, b) => a.localeCompare(b))
        .forEach((car) => console.log(car));
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
