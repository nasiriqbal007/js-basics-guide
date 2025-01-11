

// function person(name){
//  return `hello ${name}`;
// }

// let name=person("Nasir");
// console.log(name);

function person(name ="nasir"){
    if (name===null) {
        console.log("plz enter name");
        return;
    } else {
        return console.log(`${name} just loggedin `);
    }
}

// console.log(person('nasir iqbal'))

function cart(...num1){
return num1;
}
// console.log(cart(200, 300))

function one(){
    const userName="nasir";
    function two() {
        const role="Dev";
        console.log(userName);
        
    }
    two()
    // console.log(role);
    
}
one();

// const add= (num1, num2) => num1+num2;
// const add= (num1, num2) => (num1+num2);
// const add= (num1, num2) =>{
//     return num1+num2;
// } 
// const add=(num1 , num2)=>({user: "Nasir 07"})
// console.log(add(4,3));
