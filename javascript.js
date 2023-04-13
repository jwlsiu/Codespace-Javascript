// Vanilla JS Basics - Activity 1

// Define each variable and print result

let a = -5 + 8 * 6 
console.log(a);

let b = (55 + 9) % 9 
console.log(b);

let c = 20 + -3 * 5 / 8 
console.log(c);

let d = 5 + 15 / 3 * 2 - 8 % 3
console.log(d);


// Vanilla JS Basics - Activity 2

// Define variables for user to enter first and second number
let first_num = prompt('Enter first number: ')
let second_num = prompt('Enter second number: ')

//Define result variable to work out first number divided by the second number
let result = first_num / second_num 

// Print sentence and result in console and as an alert
console.log(`The division of the first number and the second number is: ${result}`)
alert(`The division of the first number and the second number is: ${result}`);


// Vanilla JS Control Statements - Activity 1

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


// Vanilla JS Loops - Activity 1

const n = 15

// looping from i = 1 to n
// in each iteration, i increased by 1
for (let i = 0; i <= n; i++) {
	// if number has no remainder when divided by 2, it is even
	if (i % 2 == 0) {
	console.log(`${i} is even`)
	// else the number is odd
	} else {
	console.log(`${i} is odd`)
	}
};


// Vanilla JS Loops - Activity 2

let number = prompt('Input a number: ')

for (let a = 1; a <= 10; a++) {
	let result = a * number
	console.log(`${number} X ${a} = ${result}`)
};


// Vanilla JS Arrays - Activity 1

// Write a JavaScript program to sum values of an array


// Define an empty Array and sum variable
const userArray = []
let sum = 0

// Ask user to input numbers to create a 10 digit array
for (let x = 1; x <= 10; x++) {
	newNum = Number(prompt('Input number to add to array: '))
	userArray.push(newNum)
	// Sum numbers at each iteration
	sum += newNum
};
// Display result
console.log(`The sum is ${sum}`);


// Vanilla JS Arrays - Activity 2

// Write a JavaScript program to calculate the average value of an array elements.

// Define an empty Array and sum variable
const userArray = []
let sum = 0

// Ask user to input numbers to create a 7 digit array
for (let x = 1; x <= 7; x++) {
	newNum = Number(prompt('Input number to add to array: '))
	userArray.push(newNum)
	// Sum numbers at each iteration
	sum += newNum
};
// Define an average variable equal to sum of all numbers in the array dividided by the length of the array
let average = sum / userArray.length
// Display result
console.log(`Average value of the array is ${average}`);


// Vanilla JS Arrays - Activity 3

// Write a JavaScript program to find the maximum and minimum value of an array.

// Define an empty Array
const userArray = []

// Ask user to input numbers to create a 10 digit array
for (let x = 1; x <= 10; x++) {
	newNum = Number(prompt('Input number to add to array: '))
	userArray.push(newNum)
};
// Display Array
console.log(`Original Array: [${userArray}]`)

// Declare variable with the Array sorted
sortedArray = userArray.sort()
// Declare variable to access the last Array element which is the maximum
maxValue = sortedArray[sortedArray.length - 1]
// Declare variable to access the first Array element which is the minimum
minValue = sortedArray[0]


console.log(`Maximum value for the above array = ${maxValue}`);
console.log(`Minimum value for the above array = ${minValue}`);


// Vanilla JS Functions - Activity 1

const userArray = []

function arrayContent() {
	let arrayLength = Number(prompt('Enter length of the array: '))
	for (let i = 1; i <= arrayLength; i++) {
		num = Number(prompt('Input number to add to array: '))
		userArray.push(num)
	}
	console.log(`The content of the array is: [${userArray}]`);
}


function arrayMaxValue() {
	let maxValue = Math.max(...userArray);
	console.log(`The max value in the array is: ${maxValue}`);
}
	
arrayContent();
arrayMaxValue();


// Vanilla JS Functions - Activity 2

let result = 1

function factorial(n) {
	if (n == 0) {
		console.log(`The factorial of zero is one, 0! = 1.`);
	} else if (n < 0) {
		console.log('The factorial is not defined for negative numbers.');
	} else {
		for (let i = 1; i <= n; i++) {
		result *= i;
		}
		console.log(`The factorial ${n}! is ${result}.`);
	}
	
}

factorial();


// Vanilla JS Functions - Activity 3

// DOES NOT GIVE AN ANSWER FOR 1 & 2

function prime(number) {
	if (number > 1) {
		for (let i = 2; i < number; i++) {
			if (number % i == 0) {
				alert(`${number} is not prime`);
				break
			} else {
				alert(`${number} is prime`);
				break
			}
			}
	} else if (number == 0) {
		alert('0 is not a prime number.');
	} else if (number == 1) {
		alert('1 is not a prime number.');
	} else {
		alert('Negative numbers cannot be prime');
	}
}

let number = parseInt(prompt('Pick a number to check if it is prime: '));
prime(number);

