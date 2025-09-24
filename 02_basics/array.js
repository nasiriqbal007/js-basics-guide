
// ================================
// 1️⃣ Basics
// ================================

const shoppingList = ["Milk", "Eggs", "Bread"];
console.log("Shopping List:", shoppingList);
// Output: ["Milk", "Eggs", "Bread"]

console.log("First item:", shoppingList[0]);
// Output: "Milk"

console.log("Last item:", shoppingList.at(-1));
// Output: "Bread"

// Add & Remove
shoppingList.push("Butter");
console.log("After push:", shoppingList);
// Output: ["Milk", "Eggs", "Bread", "Butter"]

const removedItem = shoppingList.pop();
console.log("Removed item:", removedItem);
// Output: "Butter"
console.log("After pop:", shoppingList);
// Output: ["Milk", "Eggs", "Bread"]

shoppingList.unshift("Juice");
console.log("After unshift:", shoppingList);
// Output: ["Juice", "Milk", "Eggs", "Bread"]

shoppingList.shift();
console.log("After shift:", shoppingList);
// Output: ["Milk", "Eggs", "Bread"]

shoppingList.splice(1, 1);
console.log("After splice (remove index 1):", shoppingList);
// Output: ["Milk", "Bread"]

// ================================
// 2️⃣ Combine & Copy Arrays
// ================================

const list1 = ["Apple", "Banana"];
const list2 = ["Orange", "Grapes"];
const mergedList = [...list1, ...list2];
console.log("Merged List:", mergedList);
// Output: ["Apple","Banana","Orange","Grapes"]

const firstTwo = mergedList.slice(0, 2);
console.log("First two items:", firstTwo);
// Output: ["Apple","Banana"]

// ================================
// 3️⃣ Search & Check
// ================================

console.log("Includes 'Banana'? ", mergedList.includes("Banana"));
// Output: true

console.log("Index of 'Orange':", mergedList.indexOf("Orange"));
// Output: 2

// ================================
// 4️⃣ UI-Focused Methods
// ================================

const products = [
  { name: "Laptop", price: 800, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 300, inStock: true },
];

// map → extract names
const productNames = products.map(p => p.name);
console.log("Product names (map):", productNames);
// Output: ["Laptop","Phone","Tablet"]

// filter → only in-stock
const available = products.filter(p => p.inStock);
console.log("In-stock products (filter):", available);
// Output: [{name:"Laptop",...}, {name:"Tablet",...}]

// find → get one product
const specific = products.find(p => p.price === 500);
console.log("Product with price 500 (find):", specific);
// Output: {name:"Phone", price:500, inStock:false}

// sort → by price
const sorted = [...products].sort((a, b) => a.price - b.price);
console.log("Products sorted by price:", sorted);
// Output: [{Tablet}, {Phone}, {Laptop}]

// reduce → total price
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total price (reduce):", totalPrice);
// Output: 1600

// some / every → validation
console.log("Any product < 400 (some)?", products.some(p => p.price < 400));
// Output: true
console.log("All products > 100 (every)?", products.every(p => p.price > 100));
// Output: true

// ================================
// 5️⃣ Advanced: Map + Array.from
// ================================

const peopleMap = new Map([
  ["p1", { name: "John", age: 30 }],
  ["p2", { name: "Alice", age: 25 }]
]);

console.log("Render Map using Array.from:");
Array.from(peopleMap, ([key, person]) => {
  console.log(`${key}: ${person.name}, ${person.age}`);
});
// Output:
// p1: John, 30
// p2: Alice, 25  