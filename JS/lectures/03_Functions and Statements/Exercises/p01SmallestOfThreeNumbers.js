function smallestNumber(...numbers) {
    let sortedArr = numbers.sort((a,b) => a - b);
    console.log(sortedArr[0]);
}

smallestNumber(25,
    21,
    4    
    )