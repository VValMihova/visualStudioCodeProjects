function addItem() {
  const newEl = document.querySelector("#newItemText");
  const li = document.createElement("li");
  li.textContent = newEl.value;

  const deleteLink = document.createElement("a");
  deleteLink.href = "#";
  deleteLink.textContent = "[Delete]";

  deleteLink.addEventListener("click", deleteItem);

  li.appendChild(deleteLink);

  const ulList = document.querySelector("#items");
  ulList.appendChild(li);

  newEl.value = "";

  function deleteItem(event) {
    const row = event.currentTarget.parentNode;
    row.remove();
  }
}
