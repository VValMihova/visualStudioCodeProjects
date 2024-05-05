
function astroAdventure(input) {
    function printNotEnoughEnergy(name) {
        console.log(`${name} does not have enough energy to explore!`)
    }

    function printExploreDone(name, astro) {
        console.log(`${name} has successfully explored a new area and now has ${astro.energy} energy!`)
    }

    function findByName(name) {
        return astronautsArr.find(a => a.name === name);
    }

    const n = input.shift();
    const astronauts = input.splice(0, n);
    let astronautsArr = [];
    astronauts.forEach(a => {
        const [name, oxygenLevel, energy] = a.split(" ");
        astronautsArr.push({name, oxygenLevel: Number(oxygenLevel), energy: Number(energy)})
    });


    while (input.length > 0) {
        const currentCommand = input.shift();

        if (currentCommand === 'End') {
            break;
        }
        const tokens = currentCommand.split(" - ");

        const commandType = tokens[0];

        switch (commandType) {
            case "Explore":
                const name = tokens[1];
                const energyNeeded = Number(tokens[2]);

                const astro = findByName(name);
                if (astro.energy < energyNeeded) {
                    printNotEnoughEnergy(name);
                } else {
                    astro.energy -= energyNeeded;
                    printExploreDone(name, astro);
                }
                break;

            case "Refuel":
                const nameToRefuel = tokens[1];
                const amountToRefuel = Number(tokens[2]);

                const astroToRefuel = findByName(nameToRefuel);
                if (astroToRefuel.energy + amountToRefuel > 200) {
                    console.log(`${nameToRefuel} refueled their energy by ${200 - astroToRefuel.energy}!`)
                    astroToRefuel.energy = 200;
                } else {
                    astroToRefuel.energy += amountToRefuel;
                    console.log(`${nameToRefuel} refueled their energy by ${amountToRefuel}!`)
                }

                break

            case "Breathe":
                const nameToBreath = tokens[1];
                const amountToBreath = Number(tokens[2]);

                const astroToBreath = findByName(nameToBreath);
                //"{astronaut name} took a breath and recovered {amount recovered} oxygen!"
                if (astroToBreath.oxygenLevel + amountToBreath > 100) {
                    console.log(`${nameToBreath} took a breath and recovered ${100 - astroToBreath.oxygenLevel} oxygen!`)
                    astroToBreath.oxygenLevel = 100;
                } else {
                astroToBreath.oxygenLevel+= amountToBreath;
                    console.log(`${nameToBreath} took a breath and recovered ${amountToBreath} oxygen!`)
                }
                break
        }
    }
astronautsArr.forEach(a => {
    console.log(`Astronaut: ${a.name}, Oxygen: ${a.oxygenLevel}, Energy: ${a.energy}`);
})

}

astroAdventure(['3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']
);