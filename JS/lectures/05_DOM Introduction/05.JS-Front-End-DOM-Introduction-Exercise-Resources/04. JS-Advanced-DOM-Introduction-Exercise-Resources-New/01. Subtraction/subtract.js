function subtract() {
    const firstNumRef = document.querySelector("#firstNumber").value;
    const secondNumRef = document.querySelector("#secondNumber").value;
    const result = Number(firstNumRef) - Number(secondNumRef);
    

    document.querySelector("#result").textContent = result;
   
}