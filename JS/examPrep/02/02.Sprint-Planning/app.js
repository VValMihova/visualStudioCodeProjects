window.addEventListener('load', solve);

function solve() {
    let totalPoints = 0;

    function activateDeleteBtn() {
        deleteTaskBtn.disabled = "";
    }

    function deactivateDeleteBtn() {
        deleteTaskBtn.disabled = "true";
    }

    function activateCreateBtn() {
        createTaskBtn.disabled = "";
    }

    function deactivateCreateBtn() {
        createTaskBtn.disabled = "true";
    }

    function clearInput() {
        titleInput.value = "";
        descriptionInput.value = "";
        labelInput.value = "";
        pointsInput.value = "";
        assigneeInput.value = "";
    }



    function disableInput() {
        titleInput.disabled = "true";
        descriptionInput.disabled = "true";
        labelInput.disabled = "true";
        pointsInput.disabled = "true";
        assigneeInput.disabled = "true";
    }

    function enableInput() {
        titleInput.disabled = "";
        descriptionInput.disabled = "";
        labelInput.disabled = "";
        pointsInput.disabled = "";
        assigneeInput.disabled = "";
    }

    function validInput() {
        return titleInput.value !== "" &&
            descriptionInput.value !== "" &&
            labelInput.value !== "" &&
            pointsInput.value !== "" &&
            assigneeInput.value !== "";
    }

    function clearForm(title, description, featureLabel, points, assignee) {
        title.value = "";
        description.value = "";
        featureLabel.value = "";
        points.value = "";
        assignee.value = "";
    }

    const TASK_CARD = {
        "Feature": "&#8865",
        "Low Priority Bug": "&#9737",
        "High Priority Bug": "&#9888",
    }


    const FEATURES_CLASS = {
        "Feature": "feature",
        "Low Priority Bug": "low-priority",
        "High Priority Bug": "high-priority",

    }
    // INPUTS
    const taskIdInput = document.querySelector(#task-id);
    const titleInput = document.querySelector("#title");
    const descriptionInput = document.querySelector("#description");
    const labelInput = document.querySelector("#label");
    const pointsInput = document.querySelector("#points");
    const assigneeInput = document.querySelector("#assignee");

    // AREAS
    const taskSection = document.querySelector("#tasks-section");


    // BUTTONS
    const createTaskBtn = document.querySelector("#create-task-btn");
    const deleteTaskBtn = document.querySelector("#delete-task-btn");

    // EVENT LISTENERS
    createTaskBtn.addEventListener("click", createTask);
    deleteTaskBtn.addEventListener("click", deleteTask);

    function createTask() {
        if (!validInput()) {
            return;
        }
        let currentTaskId = taskSection.childElementCount - 1;

        const article = document.createElement("article");
        article.setAttribute("id", `task-${currentTaskId}`);
        article.classList.add("task-card");

        let idOutput = `task-${currentTaskId}`;

        const featureDiv = document.createElement("div");
        featureDiv.classList.add("task-card-label");
        featureDiv.classList.add(FEATURES_CLASS[labelInput.value]);
        featureDiv.textContent = `${labelInput.value} ${TASK_CARD[(labelInput.value)]}`;
        let labelOutput = labelInput.value;

        const titleHeader = document.createElement("h3");
        titleHeader.classList.add("task-card-title");
        titleHeader.textContent = titleInput.value;
        let titleOutput = titleInput.value;

        const descParagraph = document.createElement("p");
        descParagraph.classList.add("task-card-description");
        descParagraph.textContent = descriptionInput.value;
        let descriptionOutput = descriptionInput.value;

        const pointsDiv = document.createElement("div");
        pointsDiv.classList.add("task-card-points");
        pointsDiv.textContent = `Estimated at ${pointsInput.value} pts`;
        let pointsOutput = Number(pointsInput.value);
        totalPoints += pointsOutput;

        const assigneeDiv = document.createElement("div");
        assigneeDiv.classList.add("task-card-assignee");
        assigneeDiv.textContent = `Assigned to: ${assigneeInput.value}`;
        let assigneeOutput = assigneeInput.value;

        const actionsDiv = document.createElement("div");
        actionsDiv.classList.add("task-card-actions");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", reviewForDelete);

        article.appendChild(featureDiv);
        article.appendChild(titleHeader);
        article.appendChild(descParagraph);
        article.appendChild(pointsDiv);
        article.appendChild(assigneeDiv);

        actionsDiv.appendChild(deleteBtn);
        article.appendChild(actionsDiv);

        taskSection.appendChild(article);

        clearInput();

        function review() {
            titleInput.value = titleOutput;
            descriptionInput.value = descriptionOutput;
            labelInput.value = labelOutput;
            pointsInput.value = pointsOutput;
            assigneeInput.value = assigneeOutput;
        }
        function reviewForDelete() {
            review()
            disableInput()
            deactivateCreateBtn()
            activateDeleteBtn()
            function deleteTask() {

            }
        }



    }



}