// Vanilla JS Functions - Activity 1
// Write 2 JavaScript functions to show the array content and find the max value in the array.

// Declare an empty array
const userArray = []

// Declare a function to create an array
function arrayContent() {
	// Ask user to choose the lenght of the array
	let arrayLength = Number(prompt('Enter length of the array: '))
	// Using a For Loop, ask user to enter numbers to add to the empty array defined at the start. Continues until length of the array achieved.
	for (let i = 1; i <= arrayLength; i++) {
		num = Number(prompt('Input number to add to array: '))
		userArray.push(num)
	}
	// Print the contents of the array.
	console.log(`The content of the array is: [${userArray}]`);
}

// Declare a function to find the maximum value in an array annd print the result
function arrayMaxValue() {
	// Use the Math.max() method to return the number with the highest value
	let maxValue = Math.max(...userArray);
	console.log(`The max value in the array is: ${maxValue}`);
}

// Call both functions
arrayContent();
arrayMaxValue();


// Vanilla JS Functions - Activity 2
// Write a JavaScript function to calculate the factorial of a number (a non-negative integer n ). The function accepts the number as an argument.

// Declare a Factorial function with an argument of 'n' a non-negative integer.
function factorial(n) {
	// Check if 'n' is an integer, if not print "Number must be an integer".
	if (Number.isInteger(n) == false) {
		console.log(`Number must be an integer.`);
	// If 'n' equals 0, print the factorial is 1
	} else if (n == 0) {
		console.log(`The factorial of 0 is: 1.`);
	// If 'n' is  a negative integer, print the factorial is not defined
	} else if (n < 0) {
		console.log('Factorial is not defined for negative numbers.');
	// If 'n' is a non-negative integer, calculate the product of all integers from 1 to 'n'
	} else {
		let result = 1
		for (let i = 1; i <= n; i++) {
		result *= i;
		}
		// Print the result
		console.log(`The factorial of ${n} is: ${result}.`);
	}
}

// Call the function, enter a number as an argument to find it's factorial
factorial(6);


// Vanilla JS Functions - Activity 3
// Write a JavaScript function that takes a number as a parameter and check the number is prime or not. 

function prime() {
	// Ask user to input a number to check if it is prime or not
	let number = parseInt(prompt('Pick a number to check if it is prime: '));
	// If number is 0 or 1, alert user that a prime number needs to be greater than 1
	if (number == 0 || number == 1) {
		alert('Prime numbers need to be a whole number greater than 1.');
	// If number is 2, alert user 2 is prime
	} else if (number == 2) {
		alert(`${number} is a prime number.`);
	// If number is greater than two, check if the modulus is equal to zero for numbers between 2 and number - 1. Alert user that number is not prime if true, prime if false.
	} else if (number > 2) {
		for (let i = 2; i <= number; i++) {
			if (number % i == 0) {
				alert(`${number} is not a prime number.`);
				break
			} else {
				alert(`${number} is a prime number.`);
				break
			}
		}
	// If number is less than 0, then is negative
	} else {
		alert('Negative numbers cannot be prime');
	}
}

// Call the function
prime();

