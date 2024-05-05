window.addEventListener("load", solve);

function solve() {

    function deactivateBtn(btn) {
        btn.disabled = "true";
    }

    function activateBtn(btn) {
        btn.disabled = "";
    }

    function validInput() {
        return typeInput.value !== "" &&
            amountInput.value !== "" &&
            dateInput.value !== ""
    }

    function clearForm() {
        typeInput.value = ""
        amountInput.value = ""
        dateInput.value = ""
    }

//     INPUTS
    const typeInput = document.getElementById("expense");
    const amountInput = document.getElementById("amount");
    const dateInput = document.getElementById("date");

// FIELDS
    const previewList = document.getElementById("preview-list");
    const expensesList = document.getElementById("expenses-list");
//     BUTTONS
    const formDeleteBtn = document.querySelector(".btn.delete");
    formDeleteBtn.addEventListener("click", () => {
        location.reload();
    })
    const formAddBtn = document.getElementById("add-btn");

    const formAddButton = document.getElementById("add-btn");
    formAddButton.addEventListener("click", addExpense);

    function addExpense(ev) {
        ev.preventDefault();
        if (!validInput()) {
            return;
        }
        const liElement = document.createElement("li");
        liElement.classList.add("expense-item");

        const articleElement = document.createElement("article");

        const typeElement = document.createElement("p");
        typeElement.textContent = `Type: ${typeInput.value}`
        let typeOutput = typeInput.value;

        const amountElement = document.createElement("p");
        amountElement.textContent = `Amount: ${amountInput.value}$`
        let amountOutput = amountInput.value;

        const dateElement = document.createElement("p");
        dateElement.textContent = `Date: ${dateInput.value}`
        let dateOutput = dateInput.value;

        articleElement.appendChild(typeElement)
        articleElement.appendChild(amountElement)
        articleElement.appendChild(dateElement)


        const divElement = document.createElement("div");
        divElement.classList.add("buttons");

        const editBtnElement = document.createElement("button");
        editBtnElement.classList.add("btn")
        editBtnElement.classList.add("edit")
        editBtnElement.textContent = "edit";
        editBtnElement.addEventListener("click", () => {
            typeInput.value = typeOutput;
            amountInput.value = amountOutput;
            dateInput.value = dateOutput;
            previewList.removeChild(liElement);
            activateBtn(formAddBtn);
        })

        const okBtnElement = document.createElement("button");
        okBtnElement.classList.add("btn")
        okBtnElement.classList.add("ok")
        okBtnElement.textContent = "ok";
        okBtnElement.addEventListener("click", () => {
            liElement.removeChild(divElement);
            previewList.removeChild(liElement);
            expensesList.appendChild(liElement);
            enableBtn(formAddBtn);
        })

        divElement.appendChild(editBtnElement)
        divElement.appendChild(okBtnElement)

        liElement.appendChild(articleElement)
        liElement.appendChild(divElement)
        previewList.appendChild(liElement);
        clearForm();
        deactivateBtn(formAddBtn);

    }
}

//<li class "expense-item"›
// <article>
// <p>Type: Food</p>
// <p>Amount: 50$</p>
// <p>Date: 2023-12-01</p>
// </article> v
// <div class buttons>
//  <button class="btn edit">edit</button>
//  <button class="btn ok">ok</button>
//  </div>
//  </li>
