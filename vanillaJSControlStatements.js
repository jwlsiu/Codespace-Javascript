// Vanilla JS Control Statements - Activity 1
// Write a JavaScript program that accepts three numbers and prints "All numbers are equal" if all three numbers are equal, "All numbers are different" if all three numbers are different and "Neither all are equal or different" otherwise.

// Define variables for user to enter first, second and third number
let firstNumber = Number(prompt('Input first number: '))
let secondNumber = Number(prompt('Input second number: '))
let thirdNumber = Number(prompt('Input third number: '))

// Check if all numbers are equal to each other. Print result in console and as an alert if true.
if (firstNumber == secondNumber && secondNumber == thirdNumber) {
	console.log('All numbers are equal')
	alert('All numbers are equal')
// Check if all numbers are not equal to each other. Print result in console and as an alert if true.
} else if (firstNumber != secondNumber && firstNumber != thirdNumber && secondNumber != thirdNumber) {
	console.log('All numbers are different')
	alert('All numbers are different')
// If numbers are not equal or different.
} else {
	console.log('Neither all are equal or different')
	alert('Neither all are equal or different')
};


// Vanilla JS Control Statements - Activity 2
// Write a JavaScript program that accepts three numbers from the user and prints "Increasing order" if the numbers are in the increasing order, "Decreasing order" if the numbers are in the decreasing order, and "Neither increasing or decreasing order" otherwise.

// Define variables for user to enter first, second and third number
let firstNumber = Number(prompt('Input first number: '))
let secondNumber = Number(prompt('Input second number: '))
let thirdNumber = Number(prompt('Input third number: '))

// Check if all numbers are in increasing order
if (firstNumber < secondNumber && secondNumber < thirdNumber) {
	console.log('Increasing order')
	alert('Increasing order')
// Check if all numbers are in decreasing order
} else if (firstNumber > secondNumber && secondNumber > thirdNumber) {
	console.log('Decreasing order')
	alert('Decreasing order')
// Neither increasing or decreasing
} else {
	console.log('Neither increasing or decreasing')
	alert('Neither increasing or decreasing')
};
