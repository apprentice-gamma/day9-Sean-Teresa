var sget = require('sget');

function checkPalindrome() {

    var userInput = sget('Please enter a word to be checked as a Palindrome:').trim();
    var word = removeNonLetters(userInput);
    return word == word.reverse();

}

function removeNonLetters(word){
	var input = word.replace(/\W/g, "").toLowerCase().split("");
	console.log(input);
	return input;
}

var isPalindrom = checkPalindrome();

if (isPalindrom === true) {
	console.log ('This is a Palindrome!');
} else if (isPalindrom === false) {
	console.log ('This is not a Palindrome.');
} else {
	console.log ('Please enter a valid entry.');
	checkPalindrome();
}