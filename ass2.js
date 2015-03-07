var sget = require('sget');

function checkPalindrom() {

    var userInput = sget('Please enter a word to be checked as a Palindrome:').trim();
    console.log(userInput.split('').reverse().join('').toLowerCase());
    return userInput == userInput.split('').reverse().join('').toLowerCase();

}

var isPalindrom = checkPalindrom();

if (isPalindrom === true) {
	console.log ('This is a Palindrome!');
} else if (isPalindrom === false) {
	console.log ('This is not a Palindrome.');
} else {
	console.log ('Please enter in valid entry.');
	checkPalindrom();
}