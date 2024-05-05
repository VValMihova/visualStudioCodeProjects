function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/forecaster/locations";
  const currentUrl = "http://localhost:3030/jsonstore/forecaster/today/";
  const upcomingUrl = "http://localhost:3030/jsonstore/forecaster/upcoming/";

  const getWeatherBtn = document.querySelector("#submit");

  const forecastDivElement = document.querySelector("#forecast");
  const currentWeatherDiv = document.querySelector("#current");
  const uppcomingWeatherDiv = document.querySelector("#upcoming");

  getWeatherBtn.addEventListener("click", getWeatherDataForLocation);

  const WEATHER_SYMBOLS = {
    Sunny: "☀",
    "Partly sunny": "⛅",
    Overcast: "☁",
    Rain: "☂",
    Degrees: "°",
  };

  async function getWeatherDataForLocation() {
    ////////////////// LOCATION ///////////
    const locationName = document.querySelector("#location").value;
    const locationResponse = await (await fetch(baseUrl)).json();

    const location = locationResponse.find((l) => l.name === locationName);

    const codeOfLocation = location.code;
    forecastDivElement.style.display = "";
    /////////////// WEATHER TODAY ///////////

    const currentWeatherResponse = await (
      await fetch(`${currentUrl}${codeOfLocation}`)
    ).json();

    const newDivForecasts = document.createElement("div");
    newDivForecasts.className = "forecasts";

    const newSpanConditionSymbol = document.createElement("span");
    newSpanConditionSymbol.className = "condition";
    newSpanConditionSymbol.classList.add("symbol");
    newSpanConditionSymbol.textContent =
      WEATHER_SYMBOLS[currentWeatherResponse.forecast.condition];

    newDivForecasts.appendChild(newSpanConditionSymbol);
    currentWeatherDiv.appendChild(newDivForecasts);

    const newSpanForConditions = document.createElement("span");
    newSpanForConditions.className = "condition";

    const firstSpanForData = document.createElement("span");
    const secondSpanForData = document.createElement("span");
    const thirdSpanForData = document.createElement("span");
    firstSpanForData.className = "forecast-data";
    secondSpanForData.className = "forecast-data";
    thirdSpanForData.className = "forecast-data";

    firstSpanForData.textContent = currentWeatherResponse.name;
    secondSpanForData.textContent = `${currentWeatherResponse.forecast.low}${WEATHER_SYMBOLS["Degrees"]}/${currentWeatherResponse.forecast.high}${WEATHER_SYMBOLS["Degrees"]}`;
    thirdSpanForData.textContent = currentWeatherResponse.forecast.condition;
    newSpanForConditions.appendChild(firstSpanForData);
    newSpanForConditions.appendChild(secondSpanForData);
    newSpanForConditions.appendChild(thirdSpanForData);

    newDivForecasts.appendChild(newSpanForConditions);
    ///////////////// UPCOMING WEATHER ////////////

    const upcomingWeatherResponse = await (
      await fetch(`${upcomingUrl}${codeOfLocation}`)
    ).json();

    const newDivForecastInfo = document.createElement("div");
    newDivForecastInfo.className = "forecast-info";

    upcomingWeatherResponse.forecast.forEach((day) => {
      const newSpanUpcoming = document.createElement("span");
      newSpanUpcoming.className = "upcoming";

      const newSpanForSymbol = document.createElement("span");
      newSpanForSymbol.className = "symbol";
      newSpanForSymbol.textContent = WEATHER_SYMBOLS[day.condition];
      newDivForecastInfo.appendChild(newSpanForSymbol);

      const newSpanForecastDataDegrees = document.createElement("span");
      newSpanForecastDataDegrees.className = "forecast-data";
      newSpanForecastDataDegrees.textContent = `${day.low}${WEATHER_SYMBOLS["Degrees"]}/${day.high}${WEATHER_SYMBOLS["Degrees"]}`;
      newDivForecastInfo.appendChild(newSpanForecastDataDegrees);
      

      const newSpanForecastDataCondition = document.createElement("span");
      newSpanForecastDataCondition.className = "forecast-data";
      newSpanForecastDataCondition.textContent = day.condition;
      newDivForecastInfo.appendChild(newSpanForecastDataCondition);
    });

    uppcomingWeatherDiv.appendChild(newDivForecastInfo);
   
  }
}

attachEvents();
