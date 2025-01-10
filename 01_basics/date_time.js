let mydate = new Date();

// Commonly used date methods
console.log(mydate.toDateString());         // "Fri Jan 10 2025" - Human-readable date
console.log(mydate.toLocaleDateString());   // "1/10/2025" - Localized date format
console.log(mydate.toLocaleString());       // "1/10/2025, 12:34:56 PM" - Localized date and time

// Commonly used time methods
console.log(mydate.toTimeString());         // "12:34:56 GMT+0000" - Time string
console.log(mydate.toLocaleTimeString());   // "12:34:56 PM" - Localized time

// Getting specific components (for formating or comparison)
console.log(mydate.getFullYear());          // 2025 - Year
console.log(mydate.getMonth());             // 0 (January) - Month (0-indexed)
console.log(mydate.getDate());              //  - Day of the month
console.log(mydate.getHours());             //  - Hour of the day
console.log(mydate.getMinutes());           //  - Minutes
console.log(mydate.getSeconds());           //  - Seconds
