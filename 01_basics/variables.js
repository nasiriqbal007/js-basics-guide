let a = 10;  // let: Block-scoped, allows reassignment
const b = 20;  // const: constant value, cannot be reassigned
var c = 30;  // var: avoid using it, allows reassignment

console.log("Initial value of a:", a, "Initial value of b:", b, "Initial value of c:", c);  

a = 15;  // let: reassigning a
c = 35;  // var: reassigning c
// b = 25;  // Error: const cannot be reassigned

console.log("Updated value of a:", a, "Initial value of b:", b, "Updated value of c:", c); 
