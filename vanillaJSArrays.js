// Vanilla JS Arrays - Activity 1
// Write a JavaScript program to sum values of an array


// Define an empty Array and sum variable
const userArray = []
let sum = 0

// Ask user to define the length of the array and input numbers to create the array
let arrayLength = Number(prompt('Enter length of array: '))
for (let x = 1; x <= arrayLength; x++) {
	newNum = Number(prompt(`Input number to add to array (${x}/${arrayLength}): `))
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

// Ask user to choose the length of the array and input numbers to create the array
let arrayLength = Number(prompt('Enter length of array: '))
for (let x = 1; x <= arrayLength; x++) {
	newNum = Number(prompt(`Input number to add to array (${x}/${arrayLength}): `))
	userArray.push(newNum)
	// Sum numbers at each iteration
	sum += newNum
};
// Define an average variable equal to sum of all numbers in the array dividided by the length of the array
let average = sum / arrayLength
// Display result
console.log(`Average value of the array is ${average}`);


// Vanilla JS Arrays - Activity 3
// Write a JavaScript program to find the maximum and minimum value of an array.

// Define an empty Array
const userArray = []

// Ask user to choose the length of the array and input numbers to create the array
let arrayLength = Number(prompt('Enter length of array: '))
for (let x = 1; x <= arrayLength; x++) {
	newNum = Number(prompt(`Input number to add to array (${x}/${arrayLength}): `))
	userArray.push(newNum)
};
// Display Array
console.log(`Original Array: [${userArray}]`)

// Sort the array numerically using the compare function
sortedArray = userArray.sort(function(a, b){return a - b});
console.log(`Sorted Array: [${sortedArray}]`)
// Declare variable to access the last Array element which is the maximum
maxValue = sortedArray[arrayLength - 1]
// Declare variable to access the first Array element which is the minimum
minValue = sortedArray[0]

// Print maximum and minimum values of the array
console.log(`Maximum value for the above array = ${maxValue}`);
console.log(`Minimum value for the above array = ${minValue}`);
