function charactersInRange(char1, char2) {
  let result = [];

  let start = Math.min(char1.charCodeAt(), char2.charCodeAt());
  let end = Math.max(char1.charCodeAt(), char2.charCodeAt());

  for (let index = start + 1; index < end; index++) {
    const currentChar = String.fromCharCode(index);
    result.push(currentChar);
  }

  console.log(result.join(" "));
}

charactersInRange("#", ":");
