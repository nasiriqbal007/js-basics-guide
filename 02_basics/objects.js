//Symbol and Object Creation


const mysym = Symbol("key1");

const user = {
  name: 'John',
  age: 30,
  [mysym]: "mykey",
  email: "user@e.com",
  isLoggedIN: "false",
  days: ["sunday", 'monday'],
};


// Accessing Object Properties


// console.log(user);
// console.log(user.isLoggedIN);
// console.log(user[mysym]);
// console.log(user.email);


//Adding a Method to an Object


user.greeting = function () {
//   console.log(`Hello ${this.name}`);
};

// console.log(user.greeting());


// Nested Object Creation


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


// Accessing Nested Object Properties


// console.log(person.name.details.title.professional);
// console.log(person.name.details.title.personal.hobby);
// console.log(person.address.city);


// Merging Objects


const obj1 = { id: "1a", value: '3' };
const obj2 = { id1: "2a", value1: '6' };

// const obj3 = Object.assign({}, obj1, obj2);
const obj3={...obj1, ...obj2}
console.log(obj3);