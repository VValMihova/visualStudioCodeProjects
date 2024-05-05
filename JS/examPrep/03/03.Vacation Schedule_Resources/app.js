const baseUrl = "http://localhost:3030/jsonstore/tasks/"



//INPUTS
const nameInput = document.querySelector("#name")
const numDaysInput = document.querySelector("#num-days")
const fromDateInput = document.querySelector("#from-date")

// FORM
const formElement = document.querySelector("#form form");

// FIELDS
const vacationList = document.querySelector("#list");

// BUTTONS
const loadVacationsBtn = document.querySelector("#load-vacations");
const formAddBtn = document.querySelector("#add-vacation");
const formEditBtn = document.querySelector("#edit-vacation");

// EVENT LISTENERS
loadVacationsBtn.addEventListener("click", loadVacations);
formAddBtn.addEventListener("click", addVacation)
formEditBtn.addEventListener("click", editVacation)

let currentVacationId = "";

async function loadVacations() {
    vacationList.innerHTML = "";

    const response = await fetch(baseUrl);
    const data = await response.json();
    const vacations = Object.values(data);

    for (const vacation of vacations) {
        const vacationElement = renderVacations(vacation);

        vacationList.appendChild(vacationElement);
    }

}

function renderVacations(vacation) {
    const container = document.createElement("div");
    container.classList.add("container");
    // IMPORTANT
    container.setAttribute("vacation-id", vacation._id);

    const nameElement = document.createElement("h2");
    nameElement.textContent = vacation.name

    const dateElement = document.createElement("h3");
    dateElement.textContent = vacation.date;

    const daysElement = document.createElement("h3");
    daysElement.textContent = vacation.days;

    const changeVacationButtonElement = document.createElement("button");
    changeVacationButtonElement.classList.add("change-btn");
    changeVacationButtonElement.textContent = "Change";
    changeVacationButtonElement.addEventListener("click", () => {
        nameInput.value = vacation.name;
        numDaysInput.value = vacation.days;
        fromDateInput.value = vacation.date;
        activateBtn(formEditBtn);
        deactivateBtn(formAddBtn);
        // IMPORTANT
        currentVacationId = container.getAttribute("vacation-id");

        vacationList.removeChild(container);
    })

    const doneVacationButtonElement = document.createElement("button");
    doneVacationButtonElement.classList.add("done-btn");
    doneVacationButtonElement.textContent = "Done";
    doneVacationButtonElement.addEventListener("click", async () => {
        await fetch(`${baseUrl}${vacation._id}`, {
            method: "DELETE"
        })
        await loadVacations()
    })


    container.appendChild(nameElement)
    container.appendChild(dateElement)
    container.appendChild(daysElement)
    container.appendChild(changeVacationButtonElement)
    container.appendChild(doneVacationButtonElement)

    return container;
}

async function addVacation(e) {
    e.preventDefault();
    if (!validInput()) {
        return;
    }
    const addVacationBody = {
        name: nameInput.value,
        days: numDaysInput.value,
        date: fromDateInput.value
    }
    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(addVacationBody)
    })

    clearForm();
    await loadVacations()
}


async function editVacation(ev) {
    ev.preventDefault();
    if (!validInput()) {
        return;
    }
    const editVacationBody = {
        name: nameInput.value,
        days: numDaysInput.value,
        date: fromDateInput.value,
        "_id": currentVacationId
    }

    await fetch(`${baseUrl}${currentVacationId}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(editVacationBody)
    })
    await loadVacations();
    deactivateBtn(formEditBtn);
    activateBtn(formAddBtn);
    clearForm();

}

function validInput() {
    return nameInput.value !== "" &&
        numDaysInput.value !== "" &&
        fromDateInput.value !== ""
}

function clearForm() {
    nameInput.value = ""
    numDaysInput.value = ""
    fromDateInput.value = ""
}

function activateBtn(btn) {
    btn.disabled = "";
}

function deactivateBtn(btn) {
    btn.disabled = "true";
}

//
// formAddBtn.addEventListener("click", (ev) => {
//     ev.preventDefault();
//     if (nameInput.value !== "" &&
//         numDaysInput.value !== "" &&
//         fromDateInput.value !== "") {
//         const newVacation = {
//             name: nameInput.value,
//             days: numDaysInput.value,
//             date: fromDateInput.value,
//         }
//         fetch(baseUrl, {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify(newVacation)
//         })
//             .then(loadVacations)
//
//         clearForm();
//     }
// })
//
// function loadVacations() {
//     return fetch(baseUrl)
//         .then(res => res.json())
//         .then((result) => {
//             renderVacations(Object.values(result));
//         })
// }
//
//
// function renderVacations(vacations) {
//     vacationList.innerHTML = "";
//     vacations.forEach(vac => vacationList.appendChild(renderVacation(vac)));
// }
//
// function renderVacation(vacation) {
//     const container = document.createElement("div");
//     container.classList.add("container");
//
//     const h2Element = document.createElement("h2");
//     h2Element.textContent = vacation.name;
//
//     const h3DateElement = document.createElement("h3");
//     h3DateElement.textContent = vacation.date;
//
//     const h3NumDaysElement = document.createElement("h3");
//     h3NumDaysElement.textContent = vacation.days;
//
//     const changeBtn = document.createElement("button")
//     changeBtn.classList.add("change-btn");
//     changeBtn.textContent = "Change";
//     changeBtn.addEventListener("click", () => {
//         nameInput.value = vacation.name;
//         numDaysInput.value = vacation.days;
//         fromDateInput.value = vacation.date;
//
//         vacationList.removeChild(container);
//         deactivateBtn(formAddBtn);
//         activateBtn(formEditBtn);
//
//         formElement.dataset.vacation = vacation._id;
//     })
//
//     const doneBtn = document.createElement("button")
//     doneBtn.classList.add("done-btn");
//     doneBtn.textContent = "Done";
//     doneBtn.addEventListener("click", () => {
//         fetch(`${baseUrl}${vacation._id}`, {
//             method: "DELETE"
//         }).then(loadVacations).then(() => {
//             vacationList.removeChild(container);
//
//         })
//     })
//
//     container.appendChild(h2Element);
//     container.appendChild(h3DateElement);
//     container.appendChild(h3NumDaysElement);
//     container.appendChild(changeBtn);
//     container.appendChild(doneBtn);
//
//     return container;
// }
//
// formEditBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const vacationId = formElement.dataset.vacation;
//     const vacation = {
//         name: nameInput.value,
//         days: numDaysInput.value,
//         date: fromDateInput.value,
//         "_id": vacationId,
//     }
//
//     fetch(`${baseUrl}${vacationId}`, {
//         method: "PUT",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(vacation)
//     }).then(loadVacations).then(() => {
//         deactivateBtn(formEditBtn);
//         activateBtn(formAddBtn);
//         clearForm();
//     })
//
//     delete formElement.dataset.vacation;
// })