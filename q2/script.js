const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const resultDisplay = document.getElementById("result");

function checkInput() {
  const rawValue = userInput.value.trim();

  if (rawValue === "") {
    resultDisplay.textContent = "Please enter a valid number!";
    return;
  }

  const num = Number(rawValue);

  if (Number.isNaN(num)) {
    resultDisplay.textContent = "Please enter a valid number!";
  } else if (num < 10) {
    resultDisplay.textContent = "The number is lower than 10";
  } else if (num > 10) {
    resultDisplay.textContent = "The number is higher than 10";
  } else {
    resultDisplay.textContent = "The number is equal to 10";
  }
}

checkBtn.addEventListener("click", checkInput);