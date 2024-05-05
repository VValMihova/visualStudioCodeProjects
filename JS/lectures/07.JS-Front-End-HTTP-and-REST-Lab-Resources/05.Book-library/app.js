function attachEvents() {
  //   const baseUrl = "http://localhost:3030/jsonstore/collections/books";
  //   const loadBooksBtn = document.querySelector("#loadBooks");
  //   const bookListElement = document.querySelector("#book-list");
  //   const titleInput = document.querySelector('#form input[name="title"]');
  //   const authorInput = document.querySelector('#form input[name="author"]');
  //   const idInput = document.querySelector('#form input[name = "bookId"]');
  //   const formTitle = document.querySelector("#form h3");

  //   const createBookBtn = document.querySelector("#form button");
  //   const saveBookBtn = document.createElement("button");
  //   saveBookBtn.textContent = "Save";

  //   loadBooksBtn.addEventListener("click", (e) => {
  //     fetch(baseUrl)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         bookListElement.innerHTML = "";

  //         const books = Object.values(result);

  //         books
  //           .map((book) => createBookItem(book))
  //           .forEach((bookElement) => {
  //             bookListElement.appendChild(bookElement);
  //           });
  //       });
  //   });

  //   createBookBtn.addEventListener("click", (e) => {
  //     e.preventDefault();

  //     const title = titleInput.value;
  //     const author = authorInput.value;
  //     if (title !== "" && author !== "") {
  //       fetch(baseUrl, {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           title,
  //           author,
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((result) => {
  //           console.log(result);

  //           const bookElement = createBookItem({ title, author });
  //           bookListElement.appendChild(bookElement);

  //           titleInput.value = "";
  //           authorInput.value = "";
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   });

  //   function createBookItem(book) {
  //     const bookTr = document.createElement("tr");

  //     const titleTd = document.createElement("td");
  //     titleTd.innerText = book.title;

  //     const authorTd = document.createElement("td");
  //     authorTd.innerText = book.author;

  //     const editBtn = document.createElement("button");
  //     editBtn.innerText = "Edit";

  //     const deleteBtn = document.createElement("button");
  //     deleteBtn.innerText = "Delete";

  //     const buttonsTd = document.createElement("td");
  //     buttonsTd.appendChild(editBtn);
  //     buttonsTd.appendChild(deleteBtn);

  //     bookTr.appendChild(titleTd);
  //     bookTr.appendChild(authorTd);
  //     bookTr.appendChild(buttonsTd);

  //     editBtn.addEventListener("click", editBook);
  //     function editBook(event) {
  //       event.preventDefault();

  //       formTitle.textContent = "Edit FORM";
  //       //createBookBtn.textContent = "Save";
  //       titleInput.value = book.title;
  //       authorInput.value = book.author;
  //       idInput.value = book._id;

  //       createBookBtn.replaceWith(saveBookBtn);

  //       saveBookBtn.addEventListener("click", saveEditedBook);
  //       function saveEditedBook(event) {
  //         event.preventDefault();
  //         const editedBook = event.currentTarget.parentNode;
  // console.log(idInput);
  //       }
  //     }

  //     return bookTr;
  //   }
  const url = "http://localhost:3030/jsonstore/collections/books";
  const loadBooksBtn = document.querySelector("#loadBooks");
  const booksList = document.querySelector("#book-list");

  loadBooksBtn.addEventListener("click", loadBooks);
  async function loadBooks() {
    const result = await (await fetch(url)).json();
    let booksResult = Object.values(result);

    
    booksResult.forEach((book) => {
      createBook(book);
    });
  }

  const submitBtn = document.querySelector("#form button");
  submitBtn.addEventListener("click", submitBook);
 
  function createBook(book) {
    const row = document.createElement("tr");

    const titleTd = document.createElement("td");
    const authorTd = document.createElement("td");
    const actionsTd = document.createElement("td");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    titleTd.textContent = book.title;
    authorTd.textContent = book.author;
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editBook);
    deleteBtn.textContent = "Delete";

    actionsTd.appendChild(editBtn);
    actionsTd.appendChild(deleteBtn);

    row.appendChild(titleTd);
    row.appendChild(authorTd);
    row.appendChild(actionsTd);

    booksList.appendChild(row);
  }

  async function editBook(event) {
    const row = event.currentTarget.parentNode.parentNode;
    const title = row.querySelector('td:first-child').textContent;
    const author = row.querySelector("td:nth-child(2").textContent;
    
    document.querySelector("#form h3").textContent = "Edit FORM";
    if (document.querySelector("#form h3").textContent = "Edit FORM") {
      document.querySelector("#form button").textContent = "Save";
    }

    
    document.querySelector('#form input[name="title"]').value = title 
    document.querySelector('#form input[name="author"]').value = author;

    

  }

  async function submitBook(event) {

    if (document.querySelector("#form button").textContent = "Save") {
      console.log("rigth");
    }
   else{ const title = document.querySelector('#form input[name="title"]').value;
    const author = document.querySelector('#form input[name="author"]').value;

    if (!title || !author) {
      return;
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ title, author }),
    });

    createBook({title, author}, booksList)
  }
  }
}

attachEvents();
