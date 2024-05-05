function deleteByEmail() {
  const inputField = document.querySelector('input[name="email"]');
  const tableRows = Array.from(document.querySelector("tbody").children);
  const resultField = document.querySelector("#result");
  let isRemoved = false;

  for (const row of tableRows) {
    const emailCell = row.children[1];
    if (emailCell.textContent === inputField.value) {
      row.remove();
      isRemoved = true;
    }
  }

  isRemoved === false
    ? (resultField.textContent = "Not found.")
    : (resultField.textContent = "Deleted.");

}
