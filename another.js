var sget = require('sget');

function restart () {

	var userNumOne, userNumTwo;
	var typeOfCalculation = parseInt(sget("\nWhat do you want to do? \n1 - Addition \n2 - Subtraction \n3 - Multiplication \n4 - Division \n5 - Square Root \nOr type 'quit' to quit ").trim());
	switch (typeOfCalculation) {
		case 1:
			startAddition(userNumOne, userNumTwo);
			break;
		case 2:
			startSubtraction(userNumOne, userNumTwo);
			break;
		case 3:
			startMultiplication(userNumOne, userNumTwo);
			break;
		case 4:
			startDivision(userNumOne,userNumTwo);
			break;
		case 5:
			startSquareRoot(userNumOne);
			break;
		case 'quit':
			quit();
			break;
		default:
			console.log("Not a valid entry. Try again");
			restart();
	}
}

function startAddition(numOne, numTwo) {
	userNumOne = checkInput(sget('\nEnter number:'));
	userNumTwo = checkInput(sget('\nEnter second number:'));
  	console.log("\nThe total is: ", addition(Number(userNumOne), Number(userNumTwo)));
	console.log("\n--------------------------");
	quit();
}

function startSubtraction(numOne, numTwo) {
	userNumOne = checkInput(sget('\nEnter number to subtract from:'));
	userNumTwo = checkInput(sget('\nEnter subtracting number:'));
	console.log("\nThe total is: ", subtraction(Number(userNumOne), Number(userNumTwo)));
	console.log("\n--------------------------");
	quit();
}

function startMultiplication(numOne, numTwo) {
	userNumOne = checkInput(sget('\nEnter number:'));
	userNumTwo = checkInput(sget('\nEnter second number:'));
	console.log("\nThe total is: ", multiplication(Number(userNumOne), Number(userNumTwo)));
	console.log("\n--------------------------");
	quit();
}

function startDivision(numOne, numTwo) {
	userNumOne = checkInput(sget('\nEnter dividend:'));
	userNumTwo = checkInput(sget('\nEnter diviser:'));
	console.log("\nThe total is: ", division(Number(userNumOne), Number(userNumTwo)));
	console.log("\n--------------------------");
	quit();
}

function startSquareRoot(numOne) {
	userNumOne = checkInput(sget('\nEnter number:'));
	console.log("\nThe total is: ", squareRoot(Number(userNumOne)));
	console.log("\n--------------------------");
	quit();
}

function checkInput (num) {
	if (isNaN(num)) {
		console.log("\nThis is not a valid entry. Please try again.");
		console.log("\n--------------------------");
		restart();
	} else if (!isNaN(num)) {
		return num;
	}
}

function addition(numOne, numTwo) {
	var	total = numOne + numTwo;
	return total;
}

function subtraction(numOne, numTwo) {
	var total = numOne - numTwo;
	return total;
}

function multiplication(numOne, numTwo) {
	var total = numOne * numTwo;
	return total;
}

function division(numOne, numTwo) {
	var total = numOne / numTwo;
	return total;
}

function squareRoot(numOne) {
	var total = Math.sqrt(numOne);
	return total;
}

function quit () {
	var userInput = sget("\nWould you like to 'quit' or 'restart'").trim().toLowerCase();
	if (userInput === 'quit') {
		process.exit(0);
	} else if (userInput ==='restart') {
		restart();
	} else {
		console.log("Not a valid entry.");
		quit ();
	}
}

restart();