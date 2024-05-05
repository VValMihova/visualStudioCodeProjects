function loadRepos() {
//https://api.github.com/users/k1r1L/repos
const username = document.querySelector("#username");
const fetchLink = `https://api.github.com/users/${username.value}/repos`
const listOfRepos = document.querySelector("#repos");

fetch(fetchLink)
.then(result => result.json())
.then(repositories => {
    repositories.forEach((repo) => {
        
        const newListItem = document.createElement("li");
        const newLink = document.createElement("a");
        newLink.textContent = repo.full_name;
        newLink.href = repo.html_url;
        newListItem.appendChild(newLink);
        listOfRepos.appendChild(newListItem);
    })
})
}