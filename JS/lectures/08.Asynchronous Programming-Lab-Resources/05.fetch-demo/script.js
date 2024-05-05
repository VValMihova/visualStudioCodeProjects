const formElement = document.querySelector(".country-form");
const containerElement = document.querySelector(".content");

const baseUrl = "https://restcountries.com/v2/name";

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  //GET WORKS WITH THE NAME OF THE FIELD
  const country = formData.get("country");

  fetch(`${baseUrl}/${country}`)
    .then((response) =>  response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
});

