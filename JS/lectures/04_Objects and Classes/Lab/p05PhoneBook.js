function phoneBook(input) {
  // let arrayCopy = input.slice(0);
  // const phoneObj = arrayCopy.reduce((acc, current) => {
  //   const [name, phone] = current.split(" ");
  //   acc[name] = phone;

  //   return acc;
  // }, {});

  // Object.keys(phoneObj).forEach((key) => {
  //   console.log(`${key} -> ${phoneObj[key]}`);
  // });
  const phoneBook = {};

  for (const person of input) {
    const [name, phone] = person.split(" ");
    phoneBook[name] = phone;
  }

  for (const name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
