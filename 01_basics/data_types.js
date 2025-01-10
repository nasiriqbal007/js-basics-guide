// Primitive Data Types in JavaScript
let name = "nasir";         // String: Holds text
let number = 10;            // Number: Holds numerical values (integer or float)
let isLoggedIn = false;     // Boolean: true or false
let state = null;           // Null: Represents an intentional absence of value
let undefinedVar;           // Undefined: A variable declared but not assigned a value
let uniqueId = Symbol("id"); // Symbol: Unique and immutable value
let uniqueId2 = Symbol("id"); // Each Symbol is always unique
let bigNumber = 123n;       // BigInt: Handles integers larger than Number's safe range

// console.log(typeof name);         // Output: string
// console.log(typeof number);       // Output: number
// console.log(typeof isLoggedIn);   // Output: boolean
// console.log(typeof state);        // Output: object 
// console.log(typeof undefinedVar); // Output: undefined
// console.log(typeof uniqueId);     // Output: symbol
// console.log(typeof bigNumber);    // Output: bigint
// console.log(uniqueId === uniqueId2); // Output: false (each Symbol is unique)

// ###################################################################

// Non-Primitive Data Types in JavaScript

// Array: A collection of values
const language = ["english", "urdu", "punjabi", "hindi"];

// Object: A collection of key-value pairs
let obj = {
    name: "nasir",
    age: "20",
};

// console.log(language, obj);

// Function: A block of reusable code
const myfun = function () {
    return "nasir";
};

console.log(myfun());

// Stack: Primitive values are copied by value (new memory is allocated for copies)
let myname = "Nasir iqbal";
let anotherName = myname; // Copies value of myname
anotherName = "mr_cool"; // Modifying anotherName doesn't affect myname

// console.log(myname);       // Output: Nasir iqbal
// console.log(anotherName);  // Output: mr_cool

// Heap: Non-primitive values are copied by reference (point to the same memory location)
let person = {
    name: "nasir",
    age: "20",
};
let person2 = person; // person2 points to the same object as person
person2.name = "iqbal"; // Modifying person2 affects person

// console.log(person.name);  // Output: iqbal
// console.log(person2.name); // Output: iqbal
