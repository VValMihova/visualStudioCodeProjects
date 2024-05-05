function motoRace(input) {

    function findByName(name) {
        return racers.find(r=> r.name === name);
    }
    let racers = [];

    const n = input.shift();
    const r = input.splice(0, n);
    r.forEach(racer => {
        const [name, fuel, position] = racer.split("|");
        racers.push({name, fuel: Number(fuel), position: Number(position)});
    })

    while (input.length > 0){
        const lineOfInput = input.shift();

        if (lineOfInput === "Finish"){
            break;
        }

        const tokens = lineOfInput.split(" - ");
        const command = tokens[0];

        switch (command){
            case "StopForFuel":
                const riderToRefuel = tokens[1];
                const minFuel = Number(tokens[2]);
                const changedPosition = Number(tokens[3]);

                const racerToRefuel = findByName(riderToRefuel);
                if (racerToRefuel.fuel < minFuel){
                    racerToRefuel.position = changedPosition;
                    console.log(`${riderToRefuel} stopped to refuel but lost his position, now he is ${changedPosition}.`)

                } else {
                    console.log(`${riderToRefuel} does not need to stop for fuel!`)
                }
                break;

            case "Overtaking":
                const rider1Name = tokens[1];
                const rider2Name = tokens[2];

                const rider1Position = findByName(rider1Name).position;
                const rider2Position = findByName(rider2Name).position;

                if (rider1Position < rider2Position){
                    findByName(rider1Name).position = rider2Position;
                    findByName(rider2Name).position = rider1Position;
                    console.log(`${rider1Name} overtook ${rider2Name}!`)
                }
                break

            case "EngineFail":
                const riderWithFail = tokens[1];
                const lapsLeft = tokens[2];

                const index = racers.indexOf(findByName(riderWithFail));
                racers.splice(index, 1);

                console.log(`${riderWithFail} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
                break
        }

    }
racers.forEach(r=> {
    console.log(`${r.name}\n  Final position: ${r.position}`)
})

}

motoRace((["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
)