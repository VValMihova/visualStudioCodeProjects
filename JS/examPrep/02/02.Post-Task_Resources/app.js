window.addEventListener("load", solve);

function solve() {

    //     INPUTS
    const titleInput = document.querySelector("#task-title");
    const categoryInput = document.querySelector("#task-category");
    const contentInput = document.querySelector("#task-content");

    // BUTTONS
    const publishBtn = document.querySelector("#publish-btn");
    publishBtn.addEventListener("click", publish);

    // FIELDS
    const reviewList = document.querySelector("#review-list");
    const publishedList = document.querySelector("#published-list");

    function publish(e) {
        if (!validInput()) {
            return;
        }
        const li = document.createElement("li");
        li.classList.add("rpost");

        const article = document.createElement("article");

        const heading = document.createElement("h4");
        heading.textContent = titleInput.value;
        let titleOutput = titleInput.value;

        const categoryParagraph = document.createElement("p");
        categoryParagraph.textContent = `Category: ${categoryInput.value}`;
        let categoryOutput = categoryInput.value;

        const contentParagraph = document.createElement("p");
        contentParagraph.textContent = `Content: ${contentInput.value}`;
        let contentOutput = contentInput.value;

        article.appendChild(heading);
        article.appendChild(categoryParagraph);
        article.appendChild(contentParagraph);

        const editBtn = document.createElement("button");
        editBtn.classList.add("action-btn");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", editPost);

        const postBtn = document.createElement("button");
        postBtn.classList.add("action-btn");
        postBtn.classList.add("post");
        postBtn.textContent = "Post";
        postBtn.addEventListener("click", postPost)

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(postBtn);

        reviewList.appendChild(li);
        clearInput()

        function editPost() {
            titleInput.value = titleOutput;
            categoryInput.value = categoryOutput;
            contentInput.value = contentOutput;
            reviewList.removeChild(li);
        }

        function postPost() {
            li.removeChild(editBtn);
            li.removeChild(postBtn);
            publishedList.appendChild(li);
            reviewList.removeChild(li);
        }
    }

    function clearInput() {
        titleInput.value = ""
        categoryInput.value = ""
        contentInput.value = ""
    }

    function validInput() {
        return titleInput.value !== "" && categoryInput.value !== "" && contentInput.value !== "";
    }
}