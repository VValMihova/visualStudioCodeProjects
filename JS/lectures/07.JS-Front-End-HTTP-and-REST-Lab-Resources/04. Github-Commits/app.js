async function loadCommits() {
  const username = document.querySelector("#username").value;
  const repo = document.querySelector("#repo").value;
  const list = document.querySelector("#commits");

  const response  = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
  const body = await response.json();
  body.forEach((commitObject) => {
    const newListItem = document.createElement("li");
    newListItem.textContent = `${commitObject.commit.author.name}: ${commitObject.commit.message}`
    list.appendChild(newListItem);
  })
    // .then((res) => res.json())
    // .then((commits) => {
    //   commits.forEach((commit) => {
    //     const newListItem = document.createElement("li");
    //     newListItem.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
    //     list.appendChild(newListItem);
    //   });
    // });
}
