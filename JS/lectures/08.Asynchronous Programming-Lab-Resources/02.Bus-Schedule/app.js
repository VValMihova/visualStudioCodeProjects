function solve() {
    const information = document.querySelector("#info .info");
    const departBtn = document.querySelector("#depart");
    const arriveBtn = document.querySelector("#arrive");

    let busStopInfo = {
        name: "",
        next: "depot"
    } 

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStopInfo.next}`)
        .then(res => res.json())
        .then(busData => {
            busStopInfo = busData;
            const busStopName = busData.name;
            information.textContent = `Next stop ${busStopName}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        }).catch(err => {
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        })
    }

    async function arrive() {
        information.textContent = `Arriving at ${busStopInfo.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = "true";
    }

    return {
        depart,
        arrive
    };
}

let result = solve();