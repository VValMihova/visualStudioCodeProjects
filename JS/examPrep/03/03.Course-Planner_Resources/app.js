const baseUrl = "http://localhost:3030/jsonstore/tasks/";

const courseTypes = ["Long", "Medium", "Short"];
// function select(id) {
//     return document.getElementById(`${id}`);
// }
// // INPUTS
// // const titleInput = document.querySelector("#course-name");
// // const typeInput = document.querySelector("#course-type");
// // const descriptionInput = document.querySelector("#description");
// // const teacherInput = document.querySelector("#teacher-name");
// const titleInput = select("course-name")
// const typeInput = select("course-type")
// const descriptionInput = select("description")
// const teacherInput = select("teacher-name")
//
// // FIELDS
// const courseList = document.querySelector("#list");
//
// // LOAD BUTTON
// const loadButtonElement = document.querySelector("#load-course");
// loadButtonElement.addEventListener("click", loadCourses);
//
// // EDIT COURSE BUTTON
// const editButtonElement = document.querySelector("#edit-course");
// editButtonElement.addEventListener("click", editCourse)
//
// //ADD COURSE BUTTON
// const addButtonElement = document.querySelector("#add-course");
// addButtonElement.addEventListener("click", addCourse);
// // ID
// let currentCourseId = ""
//
// async function loadCourses() {
//     courseList.innerHTML = "";
//     const response = await fetch(baseUrl);
//     const data = await response.json();
//     const courses = Object.values(data);
//
//
//     for (const course of courses) {
//         const courseElement = renderCourse(course);
//         // IMPORTANT
//         courseElement.setAttribute("data-id", course._id);
//         courseList.appendChild(courseElement);
//     }
//     deactivateBtn(editButtonElement);
// }
//
// function createElement(type, textContent, classes, id, parent, useInnerHTML) {
//     const element = document.createElement(type);
//
//     if (useInnerHTML && textContent) {
//         element.innerHTML = textContent;
//     } else if (textContent) {
//         element.textContent = textContent;
//     }
//
//     if (classes && classes.length > 0) {
//         element.classList.add(...classes);
//     }
//
//     if (id) {
//         element.setAttribute("id", id);
//     }
//
//     if (parent) {
//         parent.appendChild(element);
//     }
//
//     return element;
// }
// function renderCourse(course) {
//     const container = createElement("div", null, ["container"], null, null, null)
//     // const container = document.createElement("div");
//     // container.classList.add("container");
//
//     const title = document.createElement("h2");
//     title.textContent = course.title;
//
//     const teacher = document.createElement("h3");
//     teacher.textContent = course.teacher;
//
//     const type = document.createElement("h3");
//     type.textContent = course.type;
//
//     const description = document.createElement("h4");
//     description.textContent = course.description;
//
//     const formEditBtn = document.createElement("button")
//     formEditBtn.classList.add("edit-btn");
//     formEditBtn.textContent = " Edit Course";
//     formEditBtn.addEventListener("click", async (ev) => {
//         titleInput.value = course.title;
//         typeInput.value = course.type;
//         descriptionInput.value = course.description;
//         teacherInput.value = course.teacher;
//         // IMPORTANT
//         currentCourseId = container.getAttribute("data-id");
//
//         deactivateBtn(addButtonElement);
//         activateBtn(editButtonElement);
//         courseList.removeChild(container);
//     })
//
//     const formFinishBtn = document.createElement("button")
//     formFinishBtn.classList.add("finish-btn")
//     formFinishBtn.textContent = "Finish Course"
//     formFinishBtn.addEventListener("click", async () => {
//         const id = course._id;
//         await fetch(`${baseUrl}${id}`, {
//             method: "DELETE"
//         })
//         await loadCourses()
//     })
//
//     container.appendChild(title);
//     container.appendChild(teacher);
//     container.appendChild(type);
//     container.appendChild(description);
//     container.appendChild(formEditBtn);
//     container.appendChild(formFinishBtn);
//
//     return container;
// }
//
// async function addCourse(e) {
//     e.preventDefault();
//     const currentType = typeInput.value;
//     const findType = courseTypes.find((c) => c === currentType);
//     if (!validInput() && !findType) {
//         return;
//     }
//     const newCourseBody = {
//         title: titleInput.value,
//         type: typeInput.value,
//         description: descriptionInput.value,
//         teacher: teacherInput.value
//     }
//     await fetch(baseUrl, {
//         method: "POST",
//         body: JSON.stringify(newCourseBody)
//     })
//     cleanInput()
//     await loadCourses();
//
//
// }
//
// async function editCourse(eve) {
//     eve.preventDefault();
//
//     if (!validInput() && !findType) {
//         return;
//     }
//
//     const editedCourseBody = {
//         title: titleInput.value,
//         type: typeInput.value,
//         description: descriptionInput.value,
//         teacher: teacherInput.value
//     }
//
//     await fetch(`${baseUrl}${currentCourseId}`, {
//         method: "PUT",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             title: titleInput.value,
//             type: typeInput.value,
//             description: descriptionInput.value,
//             teacher: teacherInput.value
//         })
//     })
//     deactivateBtn(editButtonElement);
//     activateBtn(addButtonElement);
//     cleanInput();
//     await loadCourses()
// }

const titleInput = document.getElementById("course-name");
const typeInput = document.getElementById("course-type");
const descriptionInput = document.getElementById("description");
const teacherInput = document.getElementById("teacher-name");

const courseList = document.getElementById("list");

const loadCoursesBtn = document.getElementById("load-course");
loadCoursesBtn.addEventListener("click", loadCourses);

const addCourseBtn = document.getElementById("add-course");
addCourseBtn.addEventListener("click", addCourse)

const editCourseBtn = document.getElementById("edit-course");
editCourseBtn.addEventListener("click", editCourse)

let currentCourseId = '';


async function loadCourses() {
    courseList.innerHTML = "";
    const response = await fetch(baseUrl);
    const data = await response.json();
    const courses = Object.values(data);


    for (const course of courses) {
        const courseElement = renderCourse(course);
        // IMPORTANT
        // courseElement.setAttribute("data-id", course._id);
        courseList.appendChild(courseElement);
    }
}

function renderCourse(course) {
    const divElement = createElement("div", null);
    divElement.classList.add("container");
    divElement.setAttribute("course-id", course._id)

    const titleElement = createElement("h2", course.title);

    const teacherElement = createElement("h3", course.teacher);

    const typeElement = createElement("h3", course.type);

    const descriptionElement = createElement("h4", course.description);

    const editBtnElement = createElement("button", "Edit Course");
    editBtnElement.classList.add("edit-btn");
    editBtnElement.addEventListener("click", () => {
        titleInput.value = course.title;
        typeInput.value = course.type;
        descriptionInput.value = course.description;
        teacherInput.value = course.teacher;
        currentCourseId = course._id;

        courseList.removeChild(divElement);
        deactivateBtn(addCourseBtn);
        activateBtn(editCourseBtn);
    })

    const finishBtnElement = createElement("button", "Finish Course");
    finishBtnElement.classList.add("finish-btn");
    finishBtnElement.addEventListener("click", async () => {
        const id = divElement.getAttribute("course-id")
        console.log(id)
        await fetch(`${baseUrl}${id}`, {
            method: "DELETE",
        })
        await loadCourses()
    })

    divElement.appendChild(titleElement)
    divElement.appendChild(teacherElement)
    divElement.appendChild(typeElement)
    divElement.appendChild(descriptionElement)
    divElement.appendChild(editBtnElement)
    divElement.appendChild(finishBtnElement)


    return divElement;
}

async function addCourse(ev) {
    ev.preventDefault();

    let type = typeInput.value;
    let currentType = courseTypes.find(c=> c ===type);
    if (!validInput() && !currentType) {
        return;
    }
    const addCourseBody = {
        title: titleInput.value,
        type: typeInput.value,
        description: descriptionInput.value,
        teacher: teacherInput.value,
    }
    await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(addCourseBody)
    })

    cleanInput()
    await loadCourses();


}

async function editCourse(ev) {
    ev.preventDefault();

    let type = typeInput.value;
    let currentType = courseTypes.find(c=> c ===type);
    if (!validInput() && !currentType) {
        return;
    }
    const editedCourseBody = {
        title: titleInput.value,
        type: typeInput.value,
        description: descriptionInput.value,
        teacher: teacherInput.value,
        "_id": currentCourseId
    }
    await fetch(`${baseUrl}${currentCourseId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(editedCourseBody)
    })

    cleanInput()
    deactivateBtn(editCourseBtn)
    activateBtn(addCourseBtn)
    await loadCourses();
    
    
}
function createElement(type, textContent) {
    const element = document.createElement(type);

    if (textContent) {
        element.textContent = textContent;
    }


    return element;
}


function deactivateBtn(btn) {
    btn.disabled = "true";
}

function activateBtn(btn) {
    btn.disabled = "";
}

function validInput(currentType) {
    return titleInput.value !== "" &&
        typeInput.value !== "" &&
        descriptionInput.value !== "" &&
        teacherInput.value !== "";
}

function cleanInput() {
    titleInput.value = ""
    typeInput.value = ""
    descriptionInput.value = ""
    teacherInput.value = ""

}

