function getInfo() {
  const getStopId = document.querySelector("#stopId").value;

  const checkButton = document.querySelector("#submit");

  const stopName = document.querySelector("#stopName");
  const busesUl = document.querySelector("#buses");

  const baseUrl = "http://localhost:3030/jsonstore/bus/businfo";
  busesUl.innerHTML = "";

  fetch(`${baseUrl}/${getStopId}`)
    .then((response) => response.json())
    //WE HAVE THE BUST STOP INFORMATION NOW
    .then((busStop) => {
      stopName.textContent = busStop.name;
      Object.entries(busStop.buses).map(([busNumber, timeInMinutes]) => {
        const newLi = document.createElement("li");
        newLi.textContent = `Bus ${busNumber} arrives in ${timeInMinutes} minutes`;
        busesUl.appendChild(newLi);
      });
    })
    .catch(() => (stopName.textContent = "Error"));
  getStopId = "";
}
