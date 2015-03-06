var sget = require('sget');

function restart () {
	var typeOfCalculation = sget("\nWhat do you want to do \n1 - Addition \n2 - Subtraction \n3 - Multiplication \n4 - Division \n5 - Square Root \nOr type 'quit' to quit -?").trim();
	if (typeOfCalculation === "1") {
		var userNumOne = checkInput(sget('\nEnter number:'));
		var userNumTwo = checkInput(sget('\nEnter second number:'));
	  console.log("\nThe total is: ", addition(Number(userNumOne), Number(userNumTwo)));
	  console.log("--------------------------");
		restart();
	} else if (typeOfCalculation === "2") {
			var userNumOne = checkInput(sget('\nEnter number to subtract from:'));
			var userNumTwo = checkInput(sget('\nEnter subtracting number:'));
		console.log("\nThe total is: ", subtraction(Number(userNumOne), Number(userNumTwo)));
	  console.log("--------------------------");
		restart();
	} else if (typeOfCalculation === "3") {
			var userNumOne = checkInput(sget('\nEnter number:'));
			var userNumTwo = checkInput(sget('\nEnter second number:'));
		console.log("\nThe total is: ", multiplication(Number(userNumOne), Number(userNumTwo)));
	  console.log("--------------------------");
		restart();
	} else if (typeOfCalculation === "4") {
			var userNumOne = checkInput(sget('\nEnter dividend:'));
			var userNumTwo = checkInput(sget('\nEnter diviser:'));
		console.log("\nThe total is: ", division(Number(userNumOne), Number(userNumTwo)));
	  console.log("--------------------------");
		restart();
	} else if (typeOfCalculation === "5") {
			var userNumOne = checkInput(sget('\nEnter number:'));
		console.log("\nThe total is: ", squareRoot(Number(userNumOne)));
	  console.log("--------------------------");
		restart();
	} else if (typeOfCalculation === "quit") {
			quit();
	}
}

function checkInput (num) {
	if (isNaN(num)) {
		console.log("\nThis is not a valid entry. Please try again.");
		console.log("--------------------------");
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
	var userInput = sget("Would you like to quit y/n").trim();
	if (userInput === 'y') {
		process.exit(0);
	} else if (userInput ==='n') {
		restart();
	} else {
		console.log("Not a valid entry.");
		quit ();
	}
}

restart();