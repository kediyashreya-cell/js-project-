// primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggesIn = false
// const outsideTemp = null
// let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 
//console.log(id === anotherId);

 const bigNumber = 258796524755214451n
 console.log(typeof(bigNumber));
 


// Refrence(Non Primitive)
// -- Arrays, Objects, Functions

const heros = ["shaktiman", "nagraaj", "durga" ]  // arrays

// objects------
let myObj = {
name: "shreya",
age: 22,
}
// function--------
 const myFunction = function () {
    console.log("Hello world");
}
// console.log(typeof myFunction);
//   // output will be function but we call it oject function
 