function attachEvents() {
  // const url = "http://localhost:3030/jsonstore/messenger";

  // const sendBtn = document.querySelector("#submit");
  // const refreshBtn = document.querySelector("#refresh");

  // const messagesTextArea = document.querySelector("#messages");
  // //////////////////////////////
  // sendBtn.addEventListener("click", sendMessage);
  // async function sendMessage() {
  //   const author = document.querySelector('input[name="author"]').value;
  //   const content = document.querySelector('input[name="content"]').value;

  //   const response = await fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify({author, content}),
  //   });
  // }
  // ///////////////////////////////
  // refreshBtn.addEventListener("click", getMessages);
  // async function getMessages() {
  //   const result = await (await fetch(url)).json();

  //   const getedMessages = Object.values(result);
  //   messagesTextArea.textContent = "";
  //   getedMessages.forEach((mes) => {
  //     messagesTextArea.textContent += `${mes.author}: ${mes.content}\n`;
  //   });

  // }

  const baseUrl = "http://localhost:3030/jsonstore/messenger";
  // TEXAREA
  const mesages = document.querySelector("#messages");
  // INPUTS
  const author = document.querySelector('input[name="author"]');
  const content = document.querySelector('input[name="content"]');
  // BUTTONS
  document.querySelector("#submit").addEventListener("click", sendMessage);
document.querySelector("#refresh").addEventListener("click", refreshMessages);

  async function sendMessage() {
    const messageFormat = {
      author: author.value,
      content: content.value,
    };

    let validMessage = author.value !== "" && content.value !== "";
    if (validMessage) {
      await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(messageFormat),
      });
      author.value = "";
      content.value = "";
    }
  }

  async function refreshMessages() {
    const response = await (await fetch(baseUrl)).json();

    const messagesToDisplay = [];
    for (const messageInfo of Object.values(response)) {
      messagesToDisplay.push(`${messageInfo.author}: ${messageInfo.content}`)
    }
    mesages.textContent = messagesToDisplay.join("\n");
  }
}

attachEvents();
