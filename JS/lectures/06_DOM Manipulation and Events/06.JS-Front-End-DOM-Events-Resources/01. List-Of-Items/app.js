function addItem() {
    let inputField = document.querySelector("#newItemText").value;
    let newLi = document.createElement("li");
    newLi.textContent = inputField;

    const ulList = document.querySelector("#items");
    ulList.appendChild(newLi);
    
}