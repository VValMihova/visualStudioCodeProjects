const baseUrl = "http://localhost:3030/jsonstore/tasks/";
let currentMealId = "";

// INPUTS
const foodInput = document.getElementById("food");
const timeInput = document.getElementById("time");
const caloriesInput = document.getElementById("calories");

// FIELDS
const todayMeals = document.getElementById("list");

// BUTTONS
const addMealBtn = document.getElementById("add-meal");
addMealBtn.addEventListener("click", addMeal);

const editMealBtn = document.getElementById("edit-meal");
editMealBtn.addEventListener("click", editMeal);

const loadMealsBtn = document.getElementById("load-meals");
loadMealsBtn.addEventListener("click", loadAllMeals);

async function loadAllMeals() {
    todayMeals.innerHTML = "";

    const history = await fetch(baseUrl)
    const data = await history.json();
    const meals = Object.values(data);

    for (const meal of meals) {
        const mealElement = renderMeals(meal);
        //changed IMPORTANT
        todayMeals.appendChild(mealElement);
    }
    deactivateBtn(editMealBtn);
}

function renderMeals(meal) {
    const containerElement = document.createElement("div");
    containerElement.classList.add("meal");
    //changed IMPORTANT
    containerElement.setAttribute("meal-id", meal._id);

    const foodElement = document.createElement("h2");
    foodElement.textContent = meal.food;

    const timeElement = document.createElement("h3");
    timeElement.textContent = meal.time;

    const caloriesElement = document.createElement("h3");
    caloriesElement.textContent = meal.calories;

    const divButtonsElement = document.createElement("div");
    divButtonsElement.setAttribute("id", "meal-buttons");

    const changeMealBtnElement = document.createElement("button");
    changeMealBtnElement.classList.add("change-meal");
    changeMealBtnElement.textContent = "Change";
    changeMealBtnElement.addEventListener("click", () => {
        foodInput.value = meal.food;
        timeInput.value = meal.time;
        caloriesInput.value = meal.calories;
        // IMPORTANT
        currentMealId = containerElement.getAttribute("meal-id");

        deactivateBtn(addMealBtn);
        activateBtn(editMealBtn);
        todayMeals.removeChild(containerElement);
    })

    const deleteMealBtnElement = document.createElement("button");
    deleteMealBtnElement.classList.add("delete-meal");
    deleteMealBtnElement.textContent = "Delete";
    deleteMealBtnElement.addEventListener("click", async () => {
        currentMealId = containerElement.getAttribute("meal-id")
        await fetch(`${baseUrl}${currentMealId}`, {
            method: "DELETE"
        });
        await loadAllMeals();
    })

    divButtonsElement.appendChild(changeMealBtnElement)
    divButtonsElement.appendChild(deleteMealBtnElement)

    containerElement.appendChild(foodElement)
    containerElement.appendChild(timeElement)
    containerElement.appendChild(caloriesElement)
    containerElement.appendChild(divButtonsElement)

    return containerElement;

}

async function addMeal() {
    if (!validInput()) {
        return;
    }
    const addMealBody = {
        food: foodInput.value,
        calories: caloriesInput.value,
        time: timeInput.value
    }
    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(addMealBody)
    })
    clearForm();
    await loadAllMeals();

}

async function editMeal() {

    if (!validInput()) {
        return;
    }

    const editedMealBody = {
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value,
        "_id": currentMealId

    }
    await fetch(`${baseUrl}${currentMealId}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(editedMealBody)
    });
    deactivateBtn(editedMealBody);
    activateBtn(addMealBtn);
    clearForm();
    await loadAllMeals();

}

function deactivateBtn(btn) {
    btn.disabled = "true";
}

function activateBtn(btn) {
    btn.disabled = "";
}

function validInput() {
    return foodInput.value !== "" &&
        timeInput.value !== "" &&
        caloriesInput.value !== "";
}


function clearForm() {
    foodInput.value = ""
    caloriesInput.value = ""
    timeInput.value = ""
}