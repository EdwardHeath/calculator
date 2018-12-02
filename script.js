let displayValue = "0";

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.getElementById("display");

numbers.forEach(number => {
	number.addEventListener('click', numberPressed);
});

operators.forEach(operator => {
	operator.addEventListener('click', operatorPressed);
});

function operatorPressed(e) {
	console.log(e.srcElement.innerHTML);
}

function numberPressed(e) {
	const number = e.srcElement.innerHTML;
	if(displayValue == 0) {
		displayValue = number;
	} else {
		displayValue = displayValue + number;
	}
	updateDisplay();
}

function updateDisplay() {
	display.innerHTML = displayValue;
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
	switch(operator) {
		case add:
			return add(a,b);
			break;
		case subtract:
			return subtract(a,b);
			break;
		case multiply:
			return multiply(a,b);
			break;
		case divide:
			return divide(a,b);
			break;
		default:
			return null;
	}
}