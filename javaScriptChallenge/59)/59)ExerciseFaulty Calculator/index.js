const prompt = require('prompt-sync')();

// Math.random()<0.1

console.log("welcome this is calculator Enter numbers and choose oparation");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Modulus");

let a=Number(prompt("Enter first number:"));
let b=Number(prompt("Enter second number:"));
let operation = Number(prompt("Enter the operation (1-5):"));

let fasle=Math.random()<0.1;
console.log("Random condition is: " + fasle);

// The logic for the faulty calculator
// If the random condition is false, it performs operations in a different order
// Otherwise, it performs operations as expected
if(fasle){
    if (operation == "1") {
        console.log("Result: " + (a - b));
    }else if (operation == "2") {
        console.log("Result: " + (a + b));
    }else if (operation == "3") {
        console.log("Result: " + (a / b));
    }else if (operation == "4") {
        console.log("Result: " + (a * b));
    }else if (operation == "5") {
        console.log("Result: " + (a / b));
    }
}else{
    if (operation == "1") {
        console.log("Result: " + (a + b));
    }else if (operation == "2") {
        console.log("Result: " + (a - b));
    }else if (operation == "3") {
        console.log("Result: " + (a * b));
    }else if (operation == "4") {
        console.log("Result: " + (a / b));
    }else if (operation == "5") {
        console.log("Result: " + (a % b));
    }
}
