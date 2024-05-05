function addItem() {
  const newItemText = document.querySelector("#newItemText");
  const newItemValue = document.querySelector("#newItemValue");
  const menuToAdd = document.querySelector("#menu");

  const newOption = document.createElement("option");
  newOption.textContent = newItemText.value;
  newOption.value = newItemValue.value;

  if (newItemText.value !== "" && newItemValue.value !== "") {
    menuToAdd.appendChild(newOption);
    newItemText.value = "";
    newItemValue.value = "";
  }
}
