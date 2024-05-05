async function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/collections/students";

  const tableBody = document.querySelector("#results tbody");

  const submitBtn = document.querySelector("#submit");

  //////////////
  const response = await (await fetch(baseUrl)).json();
  Object.values(response).forEach((student) => {
    const grade = (Number(student.grade)).toFixed(2);
    const row = document.createElement("tr");

    // const tdFirstName = document.createElement("td");
    // tdFirstName.textContent = student.firstName;
    // row.appendChild(tdFirstName);
    row.innerHTML = `  <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.facultyNumber}</td>
    <td>${(Number(student.grade)).toFixed(2)}</td>`;

    tableBody.appendChild(row);
  });

  ////////////
  submitBtn.addEventListener("click", onLoad);

  async function onLoad() {
    const firstName = document.querySelector('.inputs input[name="firstName"]');
    const lastName = document.querySelector('.inputs input[name="lastName"]');
    const facultyNumber = document.querySelector(
      '.inputs input[name="facultyNumber"]'
    );
    const grade = document.querySelector('.inputs input[name="grade"]');

    const newStudentTemplate = {
      firstName: firstName.value,
      lastName: lastName.value,
      facultyNumber: facultyNumber.value,
      grade: grade.value
    }
    let isValid =
      firstName.value !== "" &&
      lastName.value !== "" &&
      facultyNumber.value !== "" &&
      grade.value !== "";

    if (isValid) {
      await fetch(baseUrl, {
        method: "POST", 
        body: JSON.stringify(newStudentTemplate)
      })
    }
  }
}

attachEvents();
