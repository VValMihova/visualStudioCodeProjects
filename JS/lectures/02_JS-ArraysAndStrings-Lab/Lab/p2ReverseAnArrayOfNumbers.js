function reverseArray(n, array) {
  let newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(array[i]);
  }

  let output = "";
  for (let i = newArray.length - 1; i >= 0; i--) {
    output += newArray[i] + " ";
  }

  console.log(output);
}

reverseArray(3, [10, 20, 30, 40, 50]);
