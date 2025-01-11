

const arr=[11,12,13,14,15,61,];
const arr2=new Array(1,6,2,3,4,5 );

const newarr=[...arr, ...arr2];
console.log(newarr);
console.log(arr)
let value=100;
let value2=200;
let value3=300;
console.log(Array.of(value, value2, value3))

// console.log(arr2.at(2));
// console.log(arr2.filter((item)=>item>3));

// console.log(arr2.includes(1));

// console.log(arr2.join('-'));

// console.log(arr2.pop());
// console.log(arr2.push(6));
// console.log(arr2.shift());
// console.log(arr2.unshift(1));
// console.log(arr2.slice(1,3));
// console.log(arr2.splice(1,3));
// console.log(arr2.sort((a, b) => a - b));
// console.log(arr2.toString());

const map = new Map([
    ['person1', { name: 'John', age: 30, city: 'Lahore' }],
    ['person2', { name: 'Alice', age: 25, city: 'Karachi' }],
    ['person3', { name: 'Bob', age: 35, city: 'Islamabad' }],
    ['person4', { name: 'Charlie', age: 28, city: 'Multan' }],
    ['person5', { name: 'David', age: 40, city: 'Rawalpindi' }]
  ]);
  
 
  
const names= Array.from(map ,([key, person]) => {
    console.log(`${key}:${person.name}, ${person.age}, ${person.city}`);
});



