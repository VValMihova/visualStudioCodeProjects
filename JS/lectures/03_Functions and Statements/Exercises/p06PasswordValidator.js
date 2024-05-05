function validatePassword(password) {
  const errors = [];

  if (password.length < 6 && password.length < 10) {
    errors.push("Password must be between 6 and 10 characters");
  }

  if (!password.match("^[A-Za-z0-9]+$")) {
    errors.push("Password must consist only of letters and digits");
  }
  const digitsCount = password.match(/\d/g);
  if (!digitsCount || digitsCount.length < 2) {
    errors.push("Password must have at least 2 digits");
  }

  errors.length > 0
    ? errors.forEach((element) => console.log(element))
    : console.log("Password is valid");
}

validatePassword("MyPass123");
