// ================================
// 1️⃣ Symbol and Object Creation
// ================================

// Use case: Symbols create unique keys that won't conflict with other keys
const mysym = Symbol("key1");

const user = {
  name: 'John',                // Normal property
  age: 30,
  [mysym]: "mykey",            // Unique symbol property
  email: "user@e.com",
  isLoggedIN: false,
  days: ["Sunday", "Monday"],  // Arrays inside objects
};

console.log("Full User Object:", user);
// Output: {name: "John", age: 30, email: "user@e.com", isLoggedIN: false, days: Array(2), Symbol(key1): "mykey"}

console.log("Access normal property:", user.name);
// Output: John

console.log("Access symbol property:", user[mysym]);
// Output: mykey

console.log("Access array property:", user.days[0]);
// Output: Sunday

// ✅ When to use:
// - Normal properties: most common data storage
// - Symbols: to avoid overwriting keys, useful in large apps or libraries
// - Arrays inside objects: store lists related to a single entity

// ================================
// 2️⃣ Adding Methods to Objects
// ================================

// Use case: Let objects “perform actions” like mini-programs
user.greeting = function () {
  console.log(`Hello ${this.name}, welcome back!`);
};

user.greeting();
// Output: Hello John, welcome back!

// ✅ When to use:
// - Anytime you want an object to "do something"
// - Example: user login actions, UI events, or calculations related to the object

// ================================
// 3️⃣ Nested Objects
// ================================

// Use case: Store structured/related data
const person = {
  name: {
    first: "Nasir",
    details: {
      nickName: "NI",
      title: {
        professional: "Flutter Dev",
        personal: {
          hobby: "Coding"
        }
      }
    }
  },
  address: {
    city: "Lahore",
    country: "Pakistan",
  }
};

console.log("Professional Title:", person.name.details.title.professional);
// Output: Flutter Dev

console.log("Hobby:", person.name.details.title.personal.hobby);
// Output: Coding

console.log("City:", person.address.city);
// Output: Lahore

// ✅ When to use:
// - When your data is hierarchical (e.g., user profile, company structure)
// - Makes it easy to access related nested information

// ================================
// 4️⃣ Merging Objects
// ================================

// Use case: Combine objects (settings, defaults, API responses)
const obj1 = { id: "1a", value: '3' };
const obj2 = { id1: "2a", value1: '6' };

// Using spread operator (most modern and readable)
const obj3 = { ...obj1, ...obj2 };
console.log("Merged Object (spread):", obj3);
// Output: {id: "1a", value: "3", id1: "2a", value1: "6"}

// Using Object.assign (older method, same effect)
const obj4 = Object.assign({}, obj1, obj2);
console.log("Merged Object (assign):", obj4);
// Output: {id: "1a", value: "3", id1: "2a", value1: "6"}

// ✅ When to use:
// - Combine default settings with user-provided options
// - Merge API responses
// - Avoid mutating original objects

// ================================
// 5️⃣ Iterating Objects (Keys, Values, Entries)
// ================================

// Use case: Loop through all data in object
console.log("Keys:", Object.keys(user));
// Output: ["name","age","email","isLoggedIN","days"]

console.log("Values:", Object.values(user));
// Output: ["John", 30, "user@e.com", false, Array(2)]

console.log("Entries:", Object.entries(user));
// Output: [["name","John"], ["age",30], ...]

Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: John
// age: 30
// email: user@e.com
// isLoggedIN: false
// days: Sunday,Monday

// ✅ When to use:
// - When you need to dynamically render object data in UI
// - Logging, debugging, or transforming objects
