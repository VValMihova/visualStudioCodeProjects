function employees(input) {
  const employeeObject = input.reduce((acc, current) => {
    acc[current] = current.length;
    return acc;
  }, {});

  Object.keys(employeeObject).forEach((key) => {
    console.log(`Name: ${key} -- Personal Number: ${employeeObject[key]}`);
  });
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
