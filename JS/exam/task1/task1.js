function solve(input) {
    const n = Number(input.shift());

    let baristas = {};

    for (let i = 0; i < n; i++) {
        let [name, shift, coffees] = input.shift().split(" ");
        let coffeeTypes = coffees.split(",");

        baristas[name] = {name, shift, coffeeTypes}
    }

    while (input.length > 0) {
        const line = input.shift();

        const tokens = line.split(" / ");
        const commandName = tokens[0];

        if (commandName === "Closed") {
            break;
        }

        switch (commandName) {
            case "Prepare":
                //"Prepare / {barista name} / {shift} / {coffee type}"
                const baristaToPrepare = tokens[1];
                const shiftToPrepare = tokens[2];
                const coffeeToPrepare = tokens[3];

                if (baristas[baristaToPrepare].shift === shiftToPrepare
                    && baristas[baristaToPrepare].coffeeTypes.includes(coffeeToPrepare)) {
                    console.log(`${baristaToPrepare} has prepared a ${coffeeToPrepare} for you!`)
                } else {
                    console.log(`${baristaToPrepare} is not available to prepare a ${coffeeToPrepare}.`)
                }
                break
            case "Change Shift":
                const baristaToChangeShift = tokens[1];
                const baristaNewShift = tokens[2];
                baristas[baristaToChangeShift].shift = baristaNewShift;
                console.log(`${baristaToChangeShift} has updated his shift to: ${baristaNewShift}`)
                break
            case "Learn":
                const baristaToLearn = tokens[1];
                const newCoffeeType = tokens[2];

                if (baristas[baristaToLearn].coffeeTypes.includes(newCoffeeType)) {
                    console.log(`${baristaToLearn} knows how to make ${newCoffeeType}.`)
                } else if (!baristas[baristaToLearn].coffeeTypes.includes(newCoffeeType)) {
                    baristas[baristaToLearn].coffeeTypes.push(newCoffeeType);
                    console.log(`${baristaToLearn} has learned a new coffee type: ${newCoffeeType}.`)
                }
                break;
        }
    }
    let finalValues = Object.values(baristas);
    finalValues.forEach(b => {
        let beveragesList = b.coffeeTypes.join(", ");
        console.log(`Barista: ${b.name}, Shift: ${b.shift}, Drinks: ${beveragesList}`)
    })
}


solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
)