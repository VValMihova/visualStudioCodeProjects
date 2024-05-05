function solve() {
  const addProductButtons = Array.from(
    document.querySelectorAll("button.add-product")
  );
  let textArea = document.getElementsByTagName("textarea")[0];
  const checkOutButton = document.querySelector(".checkout");

  let boughProducts = new Set();
  let totalPrice = 0;

  addProductButtons.forEach((button) => {
    button.addEventListener("click", addElementToTheCart);
  });

  checkOutButton.addEventListener("click", checkOut);

  function addElementToTheCart(event) {
    let target = event.currentTarget.parentNode.parentNode;
    const productTitle = target.querySelector(
      ".product-details .product-title"
    ).textContent;
    const productPrice = target.querySelector(
      ".product-line-price"
    ).textContent;
    textArea.value += `Added ${productTitle} for ${productPrice} to the cart.\n`;
    boughProducts.add(productTitle);
    totalPrice += Number(productPrice);
  }

  function checkOut(event) {
    const target = event.currentTarget;
    target.disabled = true;

    disableAddButtons();

    textArea.value +=
    "You bought " +
    Array.from(boughProducts).join(", ") +
    " for " +
    totalPrice.toFixed(2) +
    ".";

     function disableAddButtons() {
        addProductButtons.forEach((button) => {
           button.removeEventListener("click", addElementToTheCart);
           button.disabled = true;
        });
     }
  }
}
