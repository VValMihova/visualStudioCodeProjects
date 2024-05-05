window.addEventListener("load", solve);

function solve() {


    // REMOVE FROM
    const mainDiv = document.querySelector("#main");
    // FIELDS
    const previewList = document.querySelector("#preview-list");
// INPUTS
    const firstNameInput = document.querySelector("#first-name");
    const lastNameInput = document.querySelector("#last-name");
    const ageInput = document.querySelector("#age");
    const titleInput = document.querySelector("#story-title");
    const genreInput = document.querySelector("#genre");
    const storyInput = document.querySelector("#story");

    // BUTTONS
    const publishStoryFormBtn = document.querySelector("#form-btn");
    publishStoryFormBtn.addEventListener("click", publishStory);

    function publishStory(e) {
        e.preventDefault();
        if (!validInput()) {
            return;
        }
        const liElement = document.createElement("li");
        liElement.classList.add("story-info");

        const articleElement = document.createElement("article");

        const nameElement = document.createElement("h4");
        nameElement.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
        const firstNameOutput = firstNameInput.value;
        const lastNameOutput = lastNameInput.value;

        const ageElement = document.createElement("p");
        ageElement.textContent = `Age: ${ageInput.value}`;
        const ageOutput = ageInput.value;

        const titleElement = document.createElement("p");
        titleElement.textContent = `Title: ${titleInput.value}`;
        const titleOutput = titleInput.value;

        const genreElement = document.createElement("p");
        genreElement.textContent = `Genre: ${genreInput.value}`
        const genreOutput = genreInput.value;

        const storyElement = document.createElement("p");
        storyElement.textContent = storyInput.value;
        const storyOutput = storyInput.value;

        articleElement.appendChild(nameElement)
        articleElement.appendChild(ageElement)
        articleElement.appendChild(titleElement)
        articleElement.appendChild(genreElement)
        articleElement.appendChild(storyElement)

        const saveStoryBtn = document.createElement("button");
        saveStoryBtn.classList.add("save-btn");
        saveStoryBtn.textContent = "Save Story";
        saveStoryBtn.addEventListener("click", () => {
            mainDiv.innerHTML = "";
            const headerElement = document.createElement("h1");
            headerElement.textContent = "Your scary story is saved!";
            mainDiv.appendChild(headerElement);
        })

        const editStoryBtn = document.createElement("button");
        editStoryBtn.classList.add("edit-btn");
        editStoryBtn.textContent = "Edit Story";
        editStoryBtn.addEventListener("click", () => {
            firstNameInput.value = firstNameOutput
            lastNameInput.value = lastNameOutput
            ageInput.value = ageOutput
            titleInput.value = titleOutput
            genreInput.value = genreOutput
            storyInput.value = storyOutput
            previewList.removeChild(liElement);
            activateBtn(publishStoryFormBtn);
        })

        const deleteStoryBtn = document.createElement("button");
        deleteStoryBtn.classList.add("delete-btn");
        deleteStoryBtn.textContent = "Delete Story";
        deleteStoryBtn.addEventListener("click", () => {
            previewList.removeChild(liElement);
            activateBtn(publishStoryFormBtn);
        })

        liElement.appendChild(articleElement);
        liElement.appendChild(saveStoryBtn);
        liElement.appendChild(editStoryBtn);
        liElement.appendChild(deleteStoryBtn);

        previewList.appendChild(liElement);
        clearInput();
        deactivateBtn(publishStoryFormBtn);

    }

    function deactivateBtn(btn) {
        btn.disabled = "true";
    }

    function activateBtn(btn) {
        btn.disabled = "";
    }

    function clearInput() {
        firstNameInput.value = ""
        lastNameInput.value = ""
        ageInput.value = ""
        titleInput.value = ""
        genreInput.value = ""
        storyInput.value = ""
    }

    function validInput() {
        return firstNameInput.value !== "" && lastNameInput.value !== "" &&
            ageInput.value !== "" && titleInput.value !== "" &&
            genreInput.value !== "" && storyInput.value !== "";
    }

    TEMP

}



