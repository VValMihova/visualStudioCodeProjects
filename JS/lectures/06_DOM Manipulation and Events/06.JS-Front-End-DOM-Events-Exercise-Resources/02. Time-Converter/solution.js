function attachEventsListeners() {
  //GET ALL BUTTONS
  const daysBtn = document.querySelector("#daysBtn");
  const hoursBtn = document.querySelector("#hoursBtn");
  const minutesBtn = document.querySelector("#minutesBtn");
  const secondsBtn = document.querySelector("#secondsBtn");

  //SELECT FIELDS
  const daysField = document.querySelector("#days");
  const hoursField = document.querySelector("#hours");
  const minutesField = document.querySelector("#minutes");
  const secondsField = document.querySelector("#seconds");

  //ADD EVENT LISTEMNERS FOR BUTTONS
  daysBtn.addEventListener("click", convertFromDays);
  hoursBtn.addEventListener("click", convertFromHours);
  minutesBtn.addEventListener("click", convertFromMinutes);
  secondsBtn.addEventListener("click", convertFromSeconds);

  //CREATE FUNCTIONS
  function convertFromDays(event) {
    const daysValue = daysField.value;
    hoursField.value = daysValue * 24;
    minutesField.value = hoursField.value * 60;
    secondsField.value = minutesField.value * 60;
  }

  function convertFromHours(event) {
    const hoursValue = hoursField.value;
    daysField.value = hoursValue / 24;
    minutesField.value = hoursValue * 60;
    secondsField.value = minutesField.value * 60;
  }

  function convertFromMinutes(event) {
    const minutesValue = minutesField.value;
    secondsField.value = minutesValue * 60;
    hoursField.value = minutesValue / 60;
    daysField.value = hoursField.value / 24;
  }

  function convertFromSeconds(event) {
    const secondsValue = secondsField.value;
    minutesField.value = secondsValue / 60;
    hoursField.value = minutesField.value / 60;
    daysField.value = hoursField.value / 24;
  }
}
