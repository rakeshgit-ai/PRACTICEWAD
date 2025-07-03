console.log("Hey this is tutorial 55 of js");

var a = 4;
var b = 5;
var c = a + b;

var s = "Hello";
console.log(c + 8);
// var 55a = "rohan"; // This will give an error because variable names cannot start with a number

console.log(typeof a); // number
console.log(typeof s); // string    

const a1 = 34; // const is a constant variable, it cannot be changed
// a1 = a1 + 45; // This will give an error because a1 is a constant variable

let h = 5; // let is a block-scoped variable, it can be changed
{
    let h = 10; // This 'h' is different from the 'h' outside the block
    console.log(a);
}
console.log(h); // This will print 5, the 'h' outside the block

// Data Types in JavaScript
// Primitive Data Types
let num = 10; // number     
// null, undefined, Number, String, Boolean, BigInt, Symbol are primitive data types

let x = "harry"; // string
let y = 22; // number
let z = 3.55;
const p = true; // boolean
let q = undefined; // undefined
let r = null; // null
console.log(x, y, z, p, q, r);
console.log(typeof(x), typeof(y), typeof(z), typeof(p), typeof(q), typeof(r));

//objects in JavaScript are key-value pairs

let o ={
    "name":"harry",
    "job code":5600,
}

console.log(o);
o.salary = 5000; // Adding a new key-value pair to the object
console.log(o);