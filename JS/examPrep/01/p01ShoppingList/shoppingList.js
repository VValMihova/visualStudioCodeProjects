function shoppingList(input) {
    const products = input.shift().split("!");

    for (const command of input) {
        if (command === "Go Shopping!") {
            break;
        }
        const tokens = command.split(" ");
        const commandName = tokens[0];
        const product = tokens[1];

        switch (commandName) {
            case "Urgent":
                if (!products.includes(product)) {
                    products.unshift(product);
                }
                break;
            case "Unnecessary":
                if (products.includes(product)) {
                    const productIndex = products.indexOf(product);
                    products.splice(productIndex, 1);
                }
                break;
            case "Correct":
                const newProduct = tokens[2];
                if (products.includes(product)) {
                    const oldProductIndex = products.indexOf(product);
                    products.splice(oldProductIndex, 1, newProduct);
                }
                break;
            case "Rearrange":
                if (products.includes(product)){
                    const productIndex = products.indexOf(product);
                    products.splice(productIndex, 1);
                    products.push(product);
                }
                break
        }
    }
    console.log(products.join(", "))

}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]
)

shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
)