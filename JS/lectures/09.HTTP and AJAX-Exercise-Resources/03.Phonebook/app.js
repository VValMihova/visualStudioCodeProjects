function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/phonebook";

  // BUTTONS
  const loadBtn = document.querySelector("#btnLoad");
  const createBtn = document.querySelector("#btnCreate");

  // TEXTAREAS
  const phonebookUl = document.querySelector("#phonebook");

  // GET
  loadBtn.addEventListener("click", getPhonebook);
  async function getPhonebook() {
    
    const result = await (await fetch(baseUrl)).json();

    const data = Object.values(result);
    data.forEach((person) => {
      const li = document.createElement("li");
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete";
      deleteBtn.addEventListener("click", deleteItem);

      li.textContent = `${person.person}: ${person.phone}`;
      deleteBtn.textContent = "Delete";
      li.appendChild(deleteBtn);
      phonebookUl.appendChild(li);
      function deleteItem(event) {
        const id = person._id;
        fetch(`${baseUrl}/${id}`, {
          method: "DELETE",
        });
        li.remove();
      }
    });
  }
  // POST
  createBtn.addEventListener("click", newContact);
  async function newContact(event) {
    const person = document.querySelector("#person").value;
    const phone = document.querySelector("#phone").value;
    console.log(person);
    await fetch("http://localhost:3030/jsonstore/phonebook", {
      method: "POST",
      body: JSON.stringify({
        person,
        phone,
      }),
    });
    getPhonebook();
  }
  // DELETE
}

attachEvents();
