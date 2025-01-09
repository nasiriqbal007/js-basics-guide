// Primitive Data Types in JavaScript
let name = "nasir";         // String: Represents text
let number = 10;            // Number: Represents numbers
let isLoggedIn = false;     // Boolean: true or false
let state = null;           // Null
let undefinedVar;           // Undefined
let uniqueId = Symbol("id");
let uniqueId2=Symbol("id"); // Symbol: Unique value
let bigNumber = 123n;       // BigInt: 

console.log(typeof name);         // Outputs: string
console.log(typeof number);       // Outputs: number
console.log(typeof isLoggedIn);   // Outputs: boolean
console.log(typeof state);        // Outputs: object 
console.log(typeof undefinedVar); // Outputs: undefined
console.log(typeof uniqueId);     // Outputs: symbol
console.log(typeof bigNumber);    // Outputs: bigint
console.log(uniqueId===uniqueId2,) //Outputs:false;
