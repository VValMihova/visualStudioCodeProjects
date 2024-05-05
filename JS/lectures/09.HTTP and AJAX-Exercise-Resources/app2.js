async function lockedProfile() {
    const url = "http://localhost:3030/jsonstore/advanced/profiles";
    const main = document.getElementById("main");
   
    let response = await fetch(url);
    let data = await response.json();
    main.children[0].remove();
   
    for (const profile of Object.values(data)) {
      let mainDiv = document.createElement("div");
      mainDiv.className = "profile";
   
      let img = document.createElement("img");
      img.src = "./iconProfile2.png";
      img.className = "userIcon";
   
      let labelLock = document.createElement("label");
      labelLock.textContent = " Lock ";
      let inputRadioLock = document.createElement("input");
      inputRadioLock.type = "radio";
      inputRadioLock.name = "user1Locked"//`${profile.username}`;
      inputRadioLock.value = "lock";
      inputRadioLock.checked = true;
   
      let labelUnlock = document.createElement("label");
      labelUnlock.textContent = " Unlock ";
      let inputRadioUnLock = document.createElement("input");
      inputRadioUnLock.type = "radio";
      inputRadioUnLock.name = "user1Locked"//`${profile.username}`;
      inputRadioUnLock.value = "unlock";
      // let br = document.createElement("br");
      let hr = document.createElement("hr");
   
      let userNameLabel = document.createElement("label");
      userNameLabel.textContent = "Username";
      let userNameInput = document.createElement("input");
      userNameInput.type = "text";
      userNameInput.name = "user1Username";
      userNameInput.value = profile.username;
      userNameInput.readOnly = true;
   
      mainDiv.appendChild(img);
      mainDiv.appendChild(labelLock);
      mainDiv.appendChild(inputRadioLock);
      mainDiv.appendChild(labelUnlock);
      mainDiv.appendChild(inputRadioUnLock);
      mainDiv.appendChild(hr);
      mainDiv.appendChild(userNameLabel);
      mainDiv.appendChild(userNameInput);
   
      let divExtra = document.createElement("div");
      divExtra.className = "user1HiddenFields";
   
      let labelEmail = document.createElement("label");
      labelEmail.textContent = " Email ";
      let inputEmail = document.createElement("input");
      inputEmail.type = "email";
      inputEmail.name = "user1Email"//`${profile.email}`;
      inputEmail.value = profile.email;
      inputEmail.readOnly = true;
   
      let labelAge = document.createElement("label");
      labelAge.textContent = " Age ";
      let inputAge = document.createElement("input");
      inputAge.type = "email";
      inputAge.name = "user1Age";
      inputAge.value = profile.age;
      inputAge.readOnly = true;
   
      divExtra.appendChild(labelEmail);
      divExtra.appendChild(inputEmail);
      divExtra.appendChild(labelAge);
      divExtra.appendChild(inputAge);
      divExtra.style.display = "none";
   
      let userBtn = document.createElement("button");
      userBtn.textContent = "Show more";
      userBtn.addEventListener("click", extraInfo);
   
      mainDiv.appendChild(divExtra);
      mainDiv.appendChild(userBtn);
      main.appendChild(mainDiv);
    }
   
    function extraInfo(e) {
      let currentBtn = e.currentTarget.parentNode.querySelector("button");
      let currentCheck = e.currentTarget.parentNode.querySelectorAll("input")[1];
      let extraInfo = e.currentTarget.parentNode.querySelector("div");
      
      if (currentCheck.checked && currentBtn.textContent === "Show more") {
        extraInfo.style.display = "";
        currentBtn.textContent = "Hide it";
      }else if (currentBtn.textContent === "Hide it" && currentCheck.checked){
        extraInfo.style.display = "none";
        currentBtn.textContent = "Show more";
      }
    }
  }
  