function sortingNumbers(array) {
    let n = array.length;
    function compareNumbers(a, b) {
        return a - b;
      }

    array.sort(compareNumbers);
    let outputArray = [];

    for (let index = 0; index < n; index++)  {
        let current = array.shift();
        outputArray.push(current);
        array.reverse();
    }
    return outputArray;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);