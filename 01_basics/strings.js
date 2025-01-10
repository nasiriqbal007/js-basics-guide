let name = "Nasir Iqbal";
let score = 80;

// Console log for displaying name and score
// console.log("my name is "+ name  +" "+ "my score is "+score);
// console.log(`my name is ${name} and my score is ${score}`);

// Convert string to uppercase
console.log(name.toUpperCase()); // "NASIR IQBAL"

// Convert string to lowercase
console.log(name.toLowerCase()); // "nasir iqbal"

// Slice the string (extract part of a string)
console.log(name.slice(1, 4)); // "asi"

// Get the length of the string
console.log(name.length); // 11 (length of "Nasir Iqbal")


// Remove leading and trailing spaces
let userInput = "  Hello, World!  ";
console.log(userInput.trim()); // "Hello, World!"

// Check if the string includes a certain substring
console.log(name.includes("Iqbal")); // true

// Replace part of the string
let email = "user@example.com";
console.log(email.replace("example", "domain")); // "user@domain.com"

// Split the string into an array based on a delimiter
let sentence = "Hello, welcome to the MERN stack!";
let words = sentence.split(' ');
console.log(words); // ["Hello,", "welcome", "to", "the", "MERN", "stack!"]

// Find the position of a substring
console.log(name.indexOf("Iqbal")); // 6 (position of "Iqbal")

// Extract a specific character from the string
console.log(name.charAt(0)); // "N"


