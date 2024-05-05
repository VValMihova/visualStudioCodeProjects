

function horseRacing(input) {
    const horses = input.shift().split("|");

    for (const line of input) {
        if (line === "Finish"){
            break;
        }

        const tokens = line.split(" ");
        const commandName = tokens[0];

        switch (commandName){
            case "Retake":
                const overtakingName = tokens[1];
                const overtakenName = tokens[2];
                const overtakingIndex = getIndexByName(overtakingName);
                const overtakenIndex = getIndexByName(overtakenName);

                if (overtakingIndex < overtakenIndex){
                    horses.splice(overtakingIndex, 1, overtakenName);
                    horses.splice(overtakenIndex, 1, overtakingName);
                    printOvertakingCommand(overtakingName, overtakenName);
                }
                break

            case "Trouble":
                const troubleName = tokens[1];
                const troubleIndex = getIndexByName(troubleName);
                if (troubleIndex!==0){
                    horses.splice(troubleIndex, 1);
                    horses.splice(troubleIndex-1, 0, troubleName);
                    printTrouble(troubleName);
                }
                break

            case "Rage":
            const rageName = tokens[1];
            const rageIndex = getIndexByName(rageName);
            if (rageIndex!==horses.length -1){
                if (rageIndex === horses.length -1){
                    horses.splice(rageIndex, 1);
                    horses.push(rageIndex);
                    printRage(rageName);
                } else {
                    horses.splice(rageIndex, 1);
                    horses.splice(rageIndex + 2, 0, rageName);
                    printRage(rageName)
                }
            }
                break

            case "Miracle":
               const miracleName = horses.shift();
                horses.push(miracleName);
                printMiracle(miracleName)
                break
        }

    }
    console.log(horses.join("->"))
    console.log(`The winner is: ${horses.pop()}`)
    function getIndexByName(name) {
        return horses.indexOf(name);
    }
    function printOvertakingCommand(overtaking, overtaken) {
        console.log(`${overtaking} retakes ${overtaken}.`)
    }

    function printTrouble(nameTrouble) {
        console.log(`Trouble for ${nameTrouble} - drops one position.`)
    }

    function printRage(rageName) {
        console.log(`${rageName} rages 2 positions ahead.`)
    }

    function printMiracle(miracleName) {
        console.log(`What a miracle - ${miracleName} becomes first.`)
    }

}

// horseRacing((['Bella|Alexia|Sugar',
//     'Retake Alexia Sugar',
//     'Rage Bella',
//     'Trouble Bella',
//     'Finish'])
// );
//
// horseRacing((['Fancy|Lilly',
//     'Retake Lilly Fancy',
//     'Trouble Lilly',
//     'Trouble Lilly',
//     'Finish',
//     'Rage Lilly'])
// )

horseRacing((['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish'])
)