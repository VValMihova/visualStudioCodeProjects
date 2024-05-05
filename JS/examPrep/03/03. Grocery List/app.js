const baseUrl = "http://localhost:3030/jsonstore/grocery/";

const productInput = document.querySelector("#product");
const countInput = document.querySelector("#count");
const priceInput = document.querySelector("#price");

const tableBody = document.querySelector("#tbody");

const loadAllProductsFormButton = document.querySelector("#load-product");
loadAllProductsFormButton.addEventListener("click", loadProducts);

const addProductFormButton = document.querySelector("#add-product");
addProductFormButton.addEventListener("click", addProduct)

const updateProductFormButton = document.querySelector("#update-product");
updateProductFormButton.addEventListener("click", updateProduct)

let currentProductId = "";

async function loadAll() {
    tableBody.innerHTML = "";
    const result = await fetch(baseUrl);
    const data = await result.json();
    const shoppingList = Object.values(data);

    for (const shoppingListElement of shoppingList) {
        const product = productRender(shoppingListElement);
        tableBody.appendChild(product);
    }
}

async function loadProducts(ev) {
    ev.preventDefault();
    await loadAll();

}

function productRender(shoppingListElement) {

    const row = document.createElement("tr");
    row.setAttribute("id", shoppingListElement._id);

    const product = document.createElement("td");
    product.textContent = shoppingListElement.product;

    const count = document.createElement("td");
    count.textContent = shoppingListElement.count;

    const price = document.createElement("td");
    price.textContent = shoppingListElement.price;

    const buttons = document.createElement("td");

    const updateProductBtn = document.createElement("button");
    updateProductBtn.classList.add("update");
    updateProductBtn.textContent = "Update";
    updateProductBtn.addEventListener("click", async () => {
        productInput.value = shoppingListElement.product;
        countInput.value = shoppingListElement.count;
        priceInput.value = shoppingListElement.price;
        currentProductId = row.getAttribute("id");
        tableBody.removeChild(row);
        activateBtn(updateProductFormButton);
        deactivateBtn(addProductFormButton);
    })

    const deleteProductBtn = document.createElement("button");
    deleteProductBtn.classList.add("delete");
    deleteProductBtn.textContent = "Delete";
    deleteProductBtn.addEventListener("click", async () => {
        await fetch(`${baseUrl}${shoppingListElement._id}`, {
            method: "DELETE"
        });
        await loadAll();
    })

    buttons.appendChild(updateProductBtn);
    buttons.appendChild(deleteProductBtn);

    row.appendChild(product);
    row.appendChild(count);
    row.appendChild(price);
    row.appendChild(buttons);
    return row;

}

async function updateProduct(ev) {
    ev.preventDefault();

    const updatedBody = {
        product: productInput.value,
        count: countInput.value,
        price: priceInput.value,
    }
    await fetch(`${baseUrl}${currentProductId}`, {
        method: "PATCH",
        body: JSON.stringify(updatedBody),
        "Content-type": "application/json"
    });
    await loadAll();
    clearInput();
    activateBtn(addProductFormButton);
    deactivateBtn(updateProductFormButton);
}


async function addProduct(ev) {
    ev.preventDefault();
    if (!validInput()) {
        return;
    }
    const addProductBody = {
        product: productInput.value,
        count: countInput.value,
        price: priceInput.value,
    }
    await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(addProductBody)
    });
    await loadAll();
    clearInput()

}

function validInput() {
    return productInput.value !== "" &&
        countInput.value !== "" &&
        priceInput.value !== "";
}

function clearInput() {
    productInput.value = ""
    countInput.value = ""
    priceInput.value = "";
}

function deactivateBtn(btn) {
    btn.disabled = "true";
}

function activateBtn(btn) {
    btn.disabled = "";
}




