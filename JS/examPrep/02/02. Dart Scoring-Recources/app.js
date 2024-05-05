window.addEventListener("load", solve);

function solve() {
    const sureList = document.querySelector("#sure-list");
    const scoreboardList = document.querySelector("#scoreboard-list");
    // INPUT FIELDS
    const playerInput = document.querySelector("#player");
    const scoreInput = document.querySelector("#score");
    const roundInput = document.querySelector("#round");

    // BUTTONS
    const addBtn = document.querySelector("#add-btn");
    const clearBtn = document.querySelector(".btn.clear");

    // ADD
    addBtn.addEventListener("click", addScore);

    function addScore() {
        const validInput = playerInput.value !== "" && scoreInput.value !== "" && roundInput.value !== "";

        if (validInput) {
            const li = document.createElement("li");
            li.className = "dart-item";

            const article = document.createElement("article");

            const paragraphName = document.createElement("p");
            paragraphName.textContent = playerInput.value;
            let nameOutput = playerInput.value;

            const paragraphScore = document.createElement("p");
            paragraphScore.textContent = `Score: ${scoreInput.value}`;
            let scoreOutput = scoreInput.value;

            const paragraphRound = document.createElement("p");
            paragraphRound.textContent = `Round: ${roundInput.value}`
            let roundOutput = roundInput.value;

            article.appendChild(paragraphName);
            article.appendChild(paragraphScore);
            article.appendChild(paragraphRound);

            li.appendChild(article);

            const editBtn = document.createElement("button");
            editBtn.classList.add("btn");
            editBtn.classList.add("edit");
            editBtn.textContent = "edit";
            editBtn.addEventListener("click", edit);

            const okBtn = document.createElement("button");
            okBtn.classList.add("btn");
            okBtn.classList.add("ok");
            okBtn.textContent = "ok";
            okBtn.addEventListener("click", post)

            li.appendChild(editBtn);
            li.appendChild(okBtn);

            sureList.appendChild(li);

            addBtn.disabled = "true";
            playerInput.value = "";
            scoreInput.value = "";
            roundInput.value = "";

            clearBtn.addEventListener("click", clear)

            function clear() {
                console.log("clear")
                location.reload();
            }

            function post(event) {
                sureList.removeChild(li);
                li.removeChild(editBtn);
                li.removeChild(okBtn);
                scoreboardList.appendChild(li);
                addBtn.disabled = "";

            }

            function edit(event) {
                addBtn.disabled = "";
                playerInput.value = nameOutput;
                scoreInput.value = scoreOutput;
                roundInput.value = roundOutput;

                sureList.removeChild(li);

            }


        }
    }
}
  