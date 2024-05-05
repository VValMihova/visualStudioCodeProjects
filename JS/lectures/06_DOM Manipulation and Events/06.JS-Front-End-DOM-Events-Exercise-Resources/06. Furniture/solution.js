function solve() {
  // //GET TEXT AREAS
  // const texareas = document.querySelectorAll("textarea");
  // const inputTextArea = texareas[0];
  // const outputTextArea = texareas[1];

  // //GET BUTTONS
  // const buttons = document.querySelectorAll("button");
  // const generateBtn = buttons[0];
  // const buyBtn = buttons[1];

  // //GET TABLE AREA
  // const table = document.querySelector(".table tbody");

  // //ADD EVENT LISTENERS TO BUTTONS
  // generateBtn.addEventListener("click", addRow);
  // buyBtn.addEventListener("click", buyFurniture);

  // let checkboxes = Array.from(
  //   document.querySelectorAll("input[type=checkbox]")
  // );

  // //BOUGHT FURNITURE SET
  // const boughtFurniture = [];

  // //TOTAL PRICE AND DECOR FACTOR
  // let totalPrice = 0;
  // let decorFactorSum = 0;
  // let decorFactorNum = 0;

  // //ADD ROW
  // function addRow(event) {
  //   let furnitureObjArr = JSON.parse(inputTextArea.value);

  //   for (const furniture of furnitureObjArr) {
  //     let furnitureName = furniture["name"];
  //     let furnitureImg = furniture["img"];
  //     let furnitureDecFactor = furniture["decFactor"];
  //     let furniturePrice = furniture["price"];

  //     //CREATE NEW TABLE ROW
  //     const newRow = document.createElement("tr");
  //     //CREATE 5 TD ELEMENTS AND THEIR ATRIBUTES
  //     for (let td = 0; td < 5; td++) {
  //       const newTd = document.createElement("td");
  //       if (td === 0) {
  //         //IMAGE
  //         const imgTag = document.createElement("img");
  //         imgTag.src = furnitureImg;
  //         console.log(furnitureImg);
  //         newTd.appendChild(imgTag);
  //       } //CHECKBOX
  //       else if (td === 4) {
  //         const newCheckBox = document.createElement("input");
  //         newCheckBox.type = "checkbox";
  //         //newCheckBox.disabled = "true";
  //         newTd.appendChild(newCheckBox);
  //       } //PARAGRAPHS
  //       else {
  //         const newP = document.createElement("p");
  //         if (td === 1) {
  //           newP.textContent = furnitureName;
  //         } else if (td === 2) {
  //           newP.textContent = furniturePrice;
  //         } else if (td === 3) {
  //           newP.textContent = furnitureDecFactor;
  //         }
  //         newTd.appendChild(newP);
  //       }
  //       newRow.appendChild(newTd);
  //     }
  //     //APPEND NEW ROW TO THE MAIN TABLE
  //     table.appendChild(newRow);
  //   }
  //   // REMOVE DISABLED FROM CHECKBOXES
  //   for (const box of checkboxes) {
  //     box.removeAttribute("disabled");
  //   }
  // }

  // function buyFurniture(events) {
  //   //GET CHECKBOXES
  //   let checkboxesArr = Array.from(
  //     document.querySelectorAll("input[type=checkbox]")
  //   );

  //   checkboxesArr.forEach((box) => {
  //     if (box.checked) {
  //       //GET ROW
  //       let getParent = box.parentNode.parentNode;
  //       // GET NAME AND ADD IT TO THE SET
  //       boughtFurniture.push(getParent.children[1].textContent);
  //       //GET PRICE AND ADD IT TO TOTAL
  //       totalPrice += Number(getParent.children[2].textContent);
  //       //GET DECOR FACTOR AND ADD IT
  //       decorFactorSum += Number(getParent.children[3].textContent);
  //       decorFactorNum++;
  //     }
  //   });
  //   outputTextArea.value = `Bought furniture: ${boughtFurniture.join(
  //     ", "
  //   )}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${
  //     decorFactorSum / decorFactorNum
  //   }`;
  // }
  let input = document.getElementsByTagName("textarea")[0];
  let button = document.getElementsByTagName("button")[0];
  let tableBody = document.querySelector("tbody");
  let buttonForBuying = document.getElementsByTagName("button")[1];
  let itemsAdded = [];
  let output = document.getElementsByTagName("textarea")[1];

  button.addEventListener("click", addNewItem);
  buttonForBuying.addEventListener("click", buyItems);

  function addNewItem() {
    let items = JSON.parse(input.value);

    for (let i = 0; i < items.length; i++) {
      const element = items[i];

      let row = document.createElement("tr");
      tableBody.appendChild(row);

      let tableDataForImage = document.createElement("td");
      row.appendChild(tableDataForImage);

      let imageTag = document.createElement("img");

      imageTag.setAttribute("src", element.img);

      tableDataForImage.appendChild(imageTag);

      let tableDataForName = document.createElement("td");

      row.appendChild(tableDataForName);

      let currParagraph = document.createElement("p");

      tableDataForName.appendChild(currParagraph);

      currParagraph.textContent = element.name;

      let tableDataForPrice = document.createElement("td");

      row.appendChild(tableDataForPrice);

      let currParagraphForPrice = document.createElement("p");

      tableDataForPrice.appendChild(currParagraphForPrice);

      currParagraphForPrice.textContent = element.price;

      let tableDataForDecorationFactor = document.createElement("td");

      row.appendChild(tableDataForDecorationFactor);

      let currParagraphForDecorationFactor = document.createElement("p");

      tableDataForDecorationFactor.appendChild(
        currParagraphForDecorationFactor
      );

      currParagraphForDecorationFactor.textContent = element.decFactor;

      let tableDataForCheckBox = document.createElement("td");
      row.appendChild(tableDataForCheckBox);

      let inputTag = document.createElement("input");

      inputTag.setAttribute("type", "checkbox");

      inputTag.checked = false;

      tableDataForCheckBox.appendChild(inputTag);

      itemsAdded.push(element);

      inputTag.addEventListener("change", createCheckboxHandler);

      function createCheckboxHandler() {
        element.isChecked = this.checked;
      }
    }
  }

  function buyItems() {
    let wantedItems = itemsAdded.filter((x) => x.isChecked === true);

    //alert(itemsAdded.length);
    let boughtFurnitureItems = [];
    let totalPrice = 0;
    let totalDecFac = 0;

    for (let index = 0; index < wantedItems.length; index++) {
      const element = wantedItems[index];

      boughtFurnitureItems.push(element.name);

      totalPrice += Number(element.price);

      totalDecFac += Number(element.decFactor);
    }

    // output.value += `Bought furniture: ${boughtFurnitureItems.join(", ")}\n`;

    // let averageDecFac = totalDecFac / wantedItems.length;

    // output.value +=
    //   `Total price: ${totalPrice.toFixed(2)}\n` +
    //   `Average decoration factor: ${averageDecFac}`;
    output.value = `Bought furniture: ${boughtFurnitureItems.join(
      ", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${
        totalDecFac / wantedItems.length
    }`;
  }
}
