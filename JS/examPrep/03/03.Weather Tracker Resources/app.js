const baseURL = "http://localhost:3030/jsonstore/tasks/"

// BUTTONS
const loadHistoryBtn = document.querySelector("#load-history");
loadHistoryBtn.addEventListener("click", loadHistory);

const editWeatherBtn = document.querySelector("#edit-weather");
editWeatherBtn.addEventListener("click", editWeather);

const addWeatherBtn = document.querySelector("#add-weather");
addWeatherBtn.addEventListener("click", addWeather);

// INPUT AREAS
const locationInput = document.querySelector("#location");
const temperatureInput = document.querySelector("#temperature");
const dateInput = document.querySelector("#date");

// DOCUMENT OUTPUT AREAS
const historyArea = document.querySelector("#list");

// ID
let currentLocationId = "";

async function loadHistory() {
    // IMPORTANT
    historyArea.innerHTML = "";

    const history = await fetch(baseURL)
    const data = await history.json();
    const locations = Object.values(data);

    for (const location of locations) {
        const locationElement = renderLocations(location);
        //changed IMPORTANT
        historyArea.appendChild(locationElement);
    }
    disableBtn(editWeatherBtn);
}

function renderLocations(location) {
    const container = document.createElement("div");
    container.classList.add("container");
    //changed IMPORTANT
    container.setAttribute("location-id", location._id);

    const locationElement = document.createElement("h2");
    locationElement.textContent = location.location;

    const dateElement = document.createElement("h3");
    dateElement.textContent = location.date;

    const temperatureElement = document.createElement("h3");
    temperatureElement.setAttribute("id", "celsius");
    temperatureElement.textContent = location.temperature;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.setAttribute("id", "buttons-container");

    const changeButtonElement = document.createElement("button");
    changeButtonElement.classList.add("change-btn");
    changeButtonElement.textContent = "Change";
    changeButtonElement.addEventListener("click", () => {
        locationInput.value = location.location;
        temperatureInput.value = location.temperature;
        dateInput.value = location.date;
        // IMPORTANT
        currentLocationId = container.getAttribute("location-id");

        disableBtn(addWeatherBtn);
        enableBtn(editWeatherBtn);
        historyArea.removeChild(container);
    })

    const deleteButtonElement = document.createElement("button");
    deleteButtonElement.classList.add("delete-btn");
    deleteButtonElement.textContent = "Delete";
    deleteButtonElement.addEventListener("click", async () => {
        currentLocationId = container.getAttribute("location-id")
        console.log(currentLocationId)
        await fetch(`${baseURL}${currentLocationId}`, {
            method: "DELETE"
        });
        await loadHistory();
    })


    buttonsContainer.appendChild(changeButtonElement)
    buttonsContainer.appendChild(deleteButtonElement)

    container.appendChild(locationElement)
    container.appendChild(dateElement)
    container.appendChild(temperatureElement)
    container.appendChild(buttonsContainer)

    return container;

}

async function addWeather(ev) {
    if (!validInput()) {
        return;
    }
    const addWeatherBody = {
        location: locationInput.value,
        temperature: temperatureInput.value,
        date: dateInput.value

    }
    await fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(addWeatherBody)
    })
    clearInputs();
    await loadHistory();
}

async function editWeather(ev) {

    if (!validInput()) {
        return;
    }

    const editedWeatherBody = {
        location: locationInput.value,
        temperature: temperatureInput.value,
        date: dateInput.value,
        "_id": currentLocationId

    }
    await fetch(`${baseURL}${currentLocationId}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(editedWeatherBody)
    });
    disableBtn(editWeatherBtn);
    enableBtn(addWeatherBtn);
    clearInputs();
    await loadHistory();

}

function disableBtn(btn) {
    btn.disabled = "true";
}

function enableBtn(btn) {
    btn.disabled = "";
}


function clearInputs() {
    locationInput.value = ""
    temperatureInput.value = ""
    dateInput.value = ""
}

function validInput() {
    return locationInput.value !== "" && temperatureInput.value !== "" && dateInput.value !== "";
}

