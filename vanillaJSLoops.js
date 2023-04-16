// Vanilla JS Loops - Activity 1
// Write a JavaScript program that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

const n = 15

// Looping from i = 1 to n
// In each iteration, i increased by 1
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
// Write a JavaScript program to create the multiplication table (from 1 to 10) of a number.

// Ask user to enter a number for multiplication table
let number = prompt('Input a number: ')

// Use a For Loop to calculate the number times every number from 1 to 10. Print the sum and result.
for (let a = 1; a <= 10; a++) {
	let result = a * number
	console.log(`${number} X ${a} = ${result}`)
};
