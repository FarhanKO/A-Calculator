const display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
  if (currentInput === "0" && number !== ".") currentInput = "";
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === "") return;
  const lastChar = currentInput[currentInput.length - 1];
  if (["+", "-", "*", "/", "%"].includes(lastChar)) return;
  currentInput += operator;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    let result = eval(currentInput.replace("÷", "/").replace("×", "*"));
    if (result === Infinity || isNaN(result)) {
      display.innerText = "Error";
      currentInput = "";
      return;
    }
    display.innerText = result;
    currentInput = result.toString();
  } catch {
    display.innerText = "Error";
    currentInput = "";
  }
}

function updateDisplay() {
  display.innerText = currentInput || "0";
}