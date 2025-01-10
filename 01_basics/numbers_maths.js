// Number methods in JavaScript
let num = 12.34567;

// toFixed() - Rounds to a specified number of decimal places
console.log("num.toFixed(2):", num.toFixed(2));  // "12.35"

// toPrecision() - Returns a string representing the number to a specified precision
console.log("num.toPrecision(5):", num.toPrecision(5));  // "12.346"

// Number() - Converts a string to a number
let str = "123";
console.log("Number(str):", Number(str));  // 123

// parseInt() - Converts a string to an integer (rounds down)
let strInt = "123.45";
console.log("parseInt(strInt):", parseInt(strInt));  // 123

// parseFloat() - Converts a string to a floating-point number
let strFloat = "123.45";
console.log("parseFloat(strFloat):", parseFloat(strFloat));  // 123.45


// Math methods to round numbers
let num2 = 12.2;
let num3 = 12.6;

// Math.round() - Rounds to the nearest integer
console.log("num2 Math.round():", Math.round(num2));  // 12
console.log("num3 Math.round():", Math.round(num3));  // 13

// Math.ceil() - Rounds up to the nearest integer
console.log("num2 Math.ceil():", Math.ceil(num2));  // 13
console.log("num3 Math.ceil():", Math.ceil(num3));  // 13

// Math.floor() - Rounds down to the nearest integer
console.log("num2 Math.floor():", Math.floor(num2));  // 12
console.log("num3 Math.floor():", Math.floor(num3));  // 12

// Math.max() - Returns the largest number from a set of numbers
console.log("Math.max(num2, num3):", Math.max(num2, num3));  // 12.6

// Math.min() - Returns the smallest number from a set of numbers
console.log("Math.min(num2, num3):", Math.min(num2, num3));  // 12.2


let minValue = 1;
let maxValue = 10;
let randomInRange = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);

console.log("Random number between " + minValue + " and " + maxValue + ":", randomInRange);
