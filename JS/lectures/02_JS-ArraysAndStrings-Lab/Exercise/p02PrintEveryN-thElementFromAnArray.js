function printNthElement(array, nStep) {
  let outputArray = [];
  for (let i = 0; i < array.length; i += nStep) {
    let current = array[i];
    outputArray.push(current);
  }
  return outputArray;
}

printNthElement(["5", "20", "31", "4", "20"], 2);
