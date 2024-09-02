let previousValue = '';
let currentValue = '';
let operator = '';

function clearDisplay() {
  document.getElementById('display').innerText = '0';
  currentValue = '';
  previousValue = '';
  operator = '';
}

function appendNumber(number) {
  const display = document.getElementById('display');
  if (display.innerText === '0') {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(op) {
  previousValue = document.getElementById('display').innerText;
  operator = op;
  document.getElementById('display').innerText = '';
}

function calculate() {
  const currentValue = document.getElementById('display').innerText;
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousValue) + parseFloat(currentValue);
      break;
    case '-':
      result = parseFloat(previousValue) - parseFloat(currentValue);
      break;
    case '*':
      result = parseFloat(previousValue) * parseFloat(currentValue);
      break;
    case '/':
      result = parseFloat(previousValue) / parseFloat(currentValue);
      break;
    case '%':
      result = parseFloat(previousValue) % parseFloat(currentValue);
      break;
  }
  document.getElementById('display').innerText = result;
}

function calculateSquare() {
  const currentValue = document.getElementById('display').innerText;
  const result = parseFloat(currentValue) ** 2;
  document.getElementById('display').innerText = result;
}

function appendDot() {
  const display = document.getElementById('display');
  if (!display.innerText.includes('.')) {
    display.innerText += '.';
  }
}
