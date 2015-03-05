var sget = require('sget');

function calculate () {
	var userInput = parseInt(sget("Please make a selection (by entering number below): \n1 - Addition \n2 - Subtraction \n3 - Multiplication \n4 - Division \n5 - Square Root").trim());
	switch (userInput) {
		case 1:
			addition ();
			break;
		case 2:
			subtraction ();
			break;
		case 3:
			multiplication ();
			break;
		case 4:
			division ();
			break;
		case 5:
			squareroot ();
			break;
		default:
			console.log("Invalid input!");
			calculate ();
	}
}

function checkIfNumber () {
	var number = parseInt(sget().trim());
	if (isNaN(number)) {
		console.log("Please enter a valid entry:")
		checkIfNumber();
	} else {
		return number;
	}
} 

function addition () {
	console.log("Please enter a number:")
	var numberOne = checkIfNumber();
	console.log("Please enter in a second number:")
	var numberTwo = checkIfNumber();
	console.log(numberTwo);
	console.log(numberOne);
	var total = numberOne + numberTwo;
	console.log(total);
}

function subtraction () {
	var numberOne = parseInt(sget("Please enter number you would like to subtract from:").trim());
	var numberTwo = parseInt(sget("Please enter amount to subtract:").trim());
	var total = numberOne - numberTwo;
	console.log(total);
}

function multiplication () {
	var numberOne = parseInt(sget("Please enter number:").trim());
	var numberTwo = parseInt(sget("Please enter second number:").trim());
	var total = numberOne * numberTwo;
	console.log(total);
}

function division () {
	var numberOne = parseInt(sget("Please enter dividend:").trim());
	var numberTwo = parseInt(sget("Please enter diviser:").trim());
	var total = numberOne / numberTwo;
	console.log(total);
}

function squareroot () {
	var numberOne = parseInt(sget("Please enter number you would like the square root of:").trim());
	var total = Math.sqrt(numberOne);
	console.log(total);
}

function quit () {
	var userInput = sget("Would you like to quit y/n").trim();
	if (userInput === 'y') {
		process.exit(0);
	} else if (userInput === 'n') {
		calculate ();
	} else {
		console.log("Not a valid entry, please go fuck youself.");
		quit ();
	}
}

calculate();
quit();
