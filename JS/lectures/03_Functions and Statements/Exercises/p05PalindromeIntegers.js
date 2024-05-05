function areIntegersPalindrome(array) {
  function isPalindrome(number) {
    let numAsString = number.toString();
    let reversedNum = numAsString.split("").reverse().join("");
    return numAsString === reversedNum ;
  }
  array.forEach((element) => {
    if (isPalindrome(element)) {
        console.log("true");
    } else{
        console.log("false");
    };
  });
}

areIntegersPalindrome([123, 323, 421, 121]);
