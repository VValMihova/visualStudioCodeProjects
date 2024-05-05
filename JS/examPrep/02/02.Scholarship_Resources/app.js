window.addEventListener("load", solve);

function solve() {
    // INPUTS
    const studentNameInput = document.querySelector("#student");
    const universityInput = document.querySelector("#university");
    const scoreInput = document.querySelector("#score");

    // BUTTONS
    const nextBtn = document.querySelector("#next-btn");
    nextBtn.addEventListener("click", nextStep);

    //
    const previewList = document.querySelector("#preview-list");
    const candidatesList = document.querySelector("#candidates-list");


    function nextStep() {
        const validInput = studentNameInput.value !== "" && universityInput.value !== "" && scoreInput.value !== ""

        if (validInput) {
            const li = document.createElement("li");
            li.classList.add("application");

            const article = document.createElement("article");

            const headerForName = document.createElement("h4");
            headerForName.textContent = studentNameInput.value;
            let nameOutput = studentNameInput.value;

            const paragraphForUni = document.createElement("p");
            paragraphForUni.textContent = `University: ${universityInput.value}`;
            let uniOutput = universityInput.value;

            const paragraphForScore = document.createElement("p");
            paragraphForScore.textContent = `Score: ${scoreInput.value}`;
            let scoreOutput = scoreInput.value;

            article.appendChild(headerForName)
            article.appendChild(paragraphForUni)
            article.appendChild(paragraphForScore)
            li.appendChild(article)

            const editBtn = document.createElement("button");
            editBtn.classList.add("action-btn");
            editBtn.classList.add("edit");
            editBtn.textContent = "edit";
            editBtn.addEventListener("click", editForm)


            const applyBtn = document.createElement("button");
            applyBtn.classList.add("action-btn");
            applyBtn.classList.add("apply");
            applyBtn.textContent = "apply";
            applyBtn.addEventListener("click", applyForm)

            li.appendChild(editBtn);
            li.appendChild(applyBtn);

            previewList.appendChild(li);

            nextBtn.disabled = "true";
            studentNameInput.value = ""
            universityInput.value = ""
            scoreInput.value = ""


            function editForm() {
                nextBtn.disabled = "";
                studentNameInput.value = nameOutput;
                universityInput.value = uniOutput;
                scoreInput.value = scoreOutput;
                previewList.removeChild(li);

            }

            function applyForm() {
                previewList.removeChild(li);
                li.removeChild(editBtn);
                li.removeChild(applyBtn);
                candidatesList.appendChild(li);
                nextBtn.disabled = "";

            }

        }
    }

}
  