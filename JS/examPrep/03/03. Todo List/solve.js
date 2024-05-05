function renderTask(task) {
    const liElement = document.createElement("li");
    // important
    liElement.setAttribute("id", task._id);

    const spanElement = document.createElement("span");
    spanElement.textContent = task.name;

    const removeBtnElement = document.createElement("button");
    removeBtnElement.textContent = "Remove";
    removeBtnElement.setAttribute("id", task._id);

    const editBtnElement = document.createElement("button");
    editBtnElement.textContent = "Edit";
    editBtnElement.setAttribute("id", task._id);

    liElement.appendChild(spanElement);
    liElement.appendChild(removeBtnElement);
    liElement.appendChild(editBtnElement);

    return liElement;
}

// TODO
function attachEvents() {
    function validInput(field) {
        return field.value !== "";
    }

    const baseURL = "http://localhost:3030/jsonstore/tasks/";
    // INPUT
    const titleInput = document.querySelector("#title");
    // BUTTONS
    const addBtn = document.querySelector("#add-button")
    const loadBtn = document.querySelector("#load-button");
    //  OUTPUT FIELDS
    const toDoList = document.querySelector("#todo-list");
    // EVENT LISTENERS
    loadBtn.addEventListener("click", loadTasksHandler);
    addBtn.addEventListener("click", addTask);


    async function loadTasksHandler(ev) {
        ev.preventDefault();
        const response = await (fetch(baseURL));
        const data = await response.json();
        const tasks = Object.values(data);

       tasks.forEach(t=> {
           const renderedTask = renderTask(t);
           toDoList.appendChild(renderedTask)
       })



    }

    function renderTasks(task) {

        toDoList.innerHTML = "";
        return renderTask(task);

    }

    async function addTask(ev) {
        ev.preventDefault();
        if (!validInput(titleInput)) {
            return;
        }

        const newTaskBody = {
            name: titleInput.value
        }

        await fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(newTaskBody)
        });
        titleInput.value = "";
        await renderTask(newTaskBody)
    }


}

attachEvents();
