// Vanilla JS Arrays - Activity 1
// Write a JavaScript program to sum values of an array


// Define an empty Array and sum variable
const userArray = []
let sum = 0

// Ask user to input numbers to create a 10 digit array
for (let x = 1; x <= 10; x++) {
	newNum = Number(prompt(`Input number to add to array (${x}/10): `))
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
	newNum = Number(prompt(`Input number to add to array (${x}/7): `))
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
	newNum = Number(prompt(`Input number to add to array (${x}/10): `))
	userArray.push(newNum)
};
// Display Array
console.log(`Original Array: [${userArray}]`)

// Declare variable with the Array sorted
sortedArray = userArray.sort()
// Declare variable to access the last Array element which is the maximum
maxValue = sortedArray[9]
// Declare variable to access the first Array element which is the minimum
minValue = sortedArray[0]

// Print maximum and minimum values of the array
console.log(`Maximum value for the above array = ${maxValue}`);
console.log(`Minimum value for the above array = ${minValue}`);
