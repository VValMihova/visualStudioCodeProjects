function addressBook(input) {
  const addressObject = input.reduce((acc, current) => {
    const [name, address] = current.split(":");
    acc[name] = address;

    return acc;
  }, {});

  let sorted = Object.entries(addressObject).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  sorted.forEach((record) => {
    let name = record[0];
    let address = record[1];
    console.log(`${name} -> ${address}`);
  });
}

addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
