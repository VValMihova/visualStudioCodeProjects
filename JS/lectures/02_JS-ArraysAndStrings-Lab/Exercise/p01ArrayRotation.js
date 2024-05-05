function arrayRotation(array, timesToRotate) {
    while (timesToRotate--!==0) {
        let firstNum = array.shift();
        array.push(firstNum);
    }

    let output = "";
    array.forEach(element => {
        output+= element + " ";
    });
    console.log(output);
}
arrayRotation([51, 47, 32, 61, 21], 2);