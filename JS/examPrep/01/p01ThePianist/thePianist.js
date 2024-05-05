function thePianist(input) {
    const n = Number(input.shift());

    let piecesMap = {};

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input.shift().split("|");
        piecesMap[piece] = {composer, key}
    }
    while (input.length > 0) {
        const line = input.shift();
        const tokens = line.split("|");
        const commandName = tokens[0];

        if (commandName === "Stop") {
            break;
        }
        const piece = tokens[1];
        switch (commandName) {
            case "Add":
                if (getByName(piece) !== undefined) {
                    console.log(`${piece} is already in the collection!`)
                } else {
                    const composer = tokens[2];
                    const key = tokens[3];
                    piecesMap[piece] = {composer, key};
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                }
                break
            case "Remove":
                if (getByName(piece) === undefined){
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                } else {
                    delete piecesMap[piece];
                    console.log(`Successfully removed ${piece}!`)
                }
                    break

            case "ChangeKey":
                if (!piecesMap.hasOwnProperty(piece)){
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                } else {
                    const newKey = tokens[2];
                    piecesMap[piece].key = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`)
                }

                break
        }
    }
    let entries = Object.entries(piecesMap);
    for (let [key, value] of entries) {
        console.log(`${key} -> Composer: ${value.composer}, Key: ${value.key}`)
    }

    function getByName(piece) {
        return piecesMap[piece];
    }

}

thePianist([
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
)