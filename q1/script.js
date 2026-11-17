const messageParagraph = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

function changeMessage() {
  messageParagraph.textContent = "Hello there!";
}

changeBtn.addEventListener("click", changeMessage);