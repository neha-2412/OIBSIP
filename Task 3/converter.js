const inputField = document.getElementById('tempInput');
const outputField = document.getElementById('outputArea');
const convertButton = document.getElementById("converter");
const resetButton = document.getElementById("resetBtn");
let convertResult;

const tempToConvert = () => {
  const input = document.getElementById('tempInput');
  return parseInt(input.value);
};

const toCelsius = (inputNumber) => {
    let newNumber = (inputNumber - 32) * 5 / 9
    return newNumber;
};

const toFahrenheit = (inputNumber) => {
    let newNumber = (inputNumber * 9)/ 5 + 32;
    return newNumber;
};

const printToDom = (divId, toPrint) => {
  document.getElementById(divId).innerHTML = toPrint;
};

const colorCelsiusOutput = () => {
  if (parseFloat(convertResult) <= 0) {
    outputField.style.color = 'blue';
  } else if (parseFloat(convertResult) >= 32) {
    outputField.style.color = 'red';
  } else {
    outputField.style.color = 'green';
  };
};

const colorFahrenheitOutput = () => {
  if (parseFloat(convertResult) <= 32) {
    outputField.style.color = 'blue';
  } else if (parseFloat(convertResult) >= 90) {
    outputField.style.color = 'red';
  } else {
    outputField.style.color = 'green';
  };
};

const colorResult = () => {
  if (document.getElementById('fahrenheit').checked) {
    colorCelsiusOutput();
  } else if (document.getElementById('celsius').checked) {
    colorFahrenheitOutput();
  };
};

const determineConverter = (e) => {
  e.preventDefault();
  const inputValue = tempToConvert();
  if (document.getElementById('fahrenheit').checked) {
    convertResult = toCelsius(inputValue) + `&deg; C`;
    } else if (document.getElementById('celsius').checked) {
      convertResult = toFahrenheit(inputValue) + `&deg; F`;
    };
  printToDom('outputArea', convertResult);
  colorResult();
};

const resetForm = (e) => {
  outputField.innerHTML = '';
}

const addListeners = () => {
convertButton.addEventListener("click", determineConverter);
resetButton.addEventListener("click", resetForm);
};

const init = () => {
  addListeners();
};

init();
