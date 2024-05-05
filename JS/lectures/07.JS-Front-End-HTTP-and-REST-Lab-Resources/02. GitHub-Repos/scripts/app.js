function loadRepos() {
  const resultContainer = document.querySelector("#res");

  fetch("https://api.github.com/users/testnakov/repos")
    .then((response) => response.text())
    .then((text) => resultContainer.textContent = text);
}
