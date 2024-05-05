function lockedProfile() {
  const allButtons = Array.from(document.querySelectorAll("button"));

  allButtons.forEach((btn) => {
    btn.addEventListener("click", moreInformation);
  });

  function moreInformation(event) {
    const btn = event.currentTarget;
    const targetParent = btn.parentNode;
    const divProfileChildren = Array.from(targetParent.children);
    const unlocked = divProfileChildren[4];
    const hiddenInfo = divProfileChildren[9];

    if (!unlocked.checked) {
      return;
    }

    if (btn.textContent === "Show more") {
      hiddenInfo.style.display = "block";
      btn.textContent = "Hide it";
    } else if (btn.textContent === "Hide it") {
      hiddenInfo.style.display = "none";
      btn.textContent = "Show more";
    }

    // const lockBtn = divProfileChildren[2];
    // lockBtn.addEventListener("click", lockedProfile);

    // function lockedProfile(event) {
    // hiddenInfo.style.display = "block";
    // }
  }
}
