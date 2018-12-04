let displayValue = "0";
let currentOperator = "";
let storedValue = "0";

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.getElementById("display");
const historyDisplay = document.getElementById("history");

numbers.forEach(number => {
	number.addEventListener('click', numberPressed);
});

operators.forEach(operator => {
	operator.addEventListener('click', operatorPressed);
});

document.getElementById("equals").addEventListener('click', calculate);
document.getElementById("clear").addEventListener('click', clear);
document.getElementById("negate").addEventListener('click', negate);
document.getElementById("percent").addEventListener('click', percent);

function operatorPressed(e) {
	if (currentOperator) {
		const calculation = operate(storedValue, displayValue, currentOperator); 

		updateDisplay("0", calculation, currentOperator);

		displayValue = "0";
		currentOperator = e.srcElement.innerHTML;
		storedValue = calculation;
	} else {
		currentOperator = e.srcElement.innerHTML;

		updateDisplay("0", displayValue, currentOperator);

		storedValue = displayValue;
		displayValue = "0";
	}
}

function numberPressed(e) {
	const number = e.srcElement.innerHTML;
	if(displayValue == 0) {
		displayValue = number;
	} else {
		displayValue = displayValue + number;
	}
	display.innerHTML = displayValue;
}

function calculate() {
	if(currentOperator) {
		const calculation = operate(storedValue, displayValue, currentOperator);

		updateDisplay(calculation);

		displayValue = calculation;
		storedValue = "0";
		currentOperator = "";
	}
}

function clear() {
	displayValue = "0";
	currentOperator = "";
	storedValue = "0";

	updateDisplay(displayValue);
}

function updateDisplay(current, history = "", operator = "") {
	historyDisplay.innerHTML = `${history} ${operator}`;
	display.innerHTML = current;
	console.log(current, history, operator);
}

function negate() {
	displayValue = `${parseInt(displayValue) * -1}`;

	updateDisplay(displayValue);
}

function percent() {
	displayValue = `0.0${displayValue}`;

	updateDisplay(displayValue);
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return (b !== 0) ? a / b : NaN;
}

function operate(a, b, operator) {
	// a = parseInt(a);
	// b = parseInt(b);

	switch(operator) {
		case "+":
			return add(a,b);
			break;
		case "-":
			return subtract(a,b);
			break;
		case "*":
			return multiply(a,b);
			break;
		case "/":
			return divide(a,b);
			break;
		default:
			return null;
	}
}