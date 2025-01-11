


// Objects Example
const person = {
    name: "Nasir",
    professional: "Flutter Dev",
    hobby: {
      1: "coding",
      2: "chats"
    },
    city: "Lahore",
  };
  
  // Using for...in with Object
  console.log("Object - Using for...in:");
  for (const key in person) {
    console.log(`Key: ${key}, Value: ${person[key]}`);
  }
  
  // Using Object.entries() with forEach
  console.log("\nObject - Using Object.entries() with forEach:");
  Object.entries(person).forEach(([key, value]) => {
    console.log(`Key: ${key}, Value: ${value}`);
  });
  
  // Using Object.keys() with forEach
  console.log("\nObject - Using Object.keys() with forEach:");
  Object.keys(person).forEach((key) => {
    console.log(`Key: ${key}, Value: ${person[key]}`);
  });
  
  
  // Arrays Example
  const arr = [10, 20, 30, 40, 50];
  
  // Using forEach with Array
  console.log("\nArray - Using forEach:");
  arr.forEach(value => {
    console.log(value);
  });
  
  // Using filter with Array
  console.log("\nArray - Using filter (values > 30):");
  const filteredArr = arr.filter(value => value > 30);
  console.log(filteredArr); // [40, 50]
  
  // Using map with Array
  console.log("\nArray - Using map (multiply each element by 2):");
  const mappedArr = arr.map(value => value * 2);
  console.log(mappedArr); // [20, 40, 60, 80, 100]
  
  // Using for...of with Array
  console.log("\nArray - Using for...of:");
  for (const value of arr) {
    console.log(value);
  }
  
  // Using for...in with Array (indexes)
  console.log("\nArray - Using for...in:");
  for (const index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
  }
  
  
  // Maps Example
  const map = new Map();
  map.set("a", 1);
  map.set("b", 2);
  map.set("c", 3);
  
  // Using forEach with Map
  console.log("\nMap - Using forEach:");
  map.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
  });
  
  // Using for...of with Map (entries)
  console.log("\nMap - Using for...of:");
  for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
  }
  
  // Using filter with Map (convert to array first)
  console.log("\nMap - Using filter (values > 1):");
  const filteredMap = Array.from(map).filter(([key, value]) => value > 1);
  console.log(filteredMap); // [["b", 2], ["c", 3]]
  
  
  // Sets Example
  const set = new Set([10, 20, 30, 40, 50]);
  
  // Using forEach with Set
  console.log("\nSet - Using forEach:");
  set.forEach(value => {
    console.log(value);
  });
  
  // Using for...of with Set
  console.log("\nSet - Using for...of:");
  for (const value of set) {
    console.log(value);
  }
  
  // Using filter with Set (convert to array first)
  console.log("\nSet - Using filter (values > 30):");
  const filteredSet = Array.from(set).filter(value => value > 30);
  console.log(filteredSet); // [40, 50]
  
  