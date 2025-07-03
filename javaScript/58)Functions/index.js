console.log("hey harry you are good ");
console.log("hey harry you are nice ");
console.log("hey harry you are tshrit is good");
console.log("hey harry you are Cource is good");


function nice(name) {
    console.log("hey " + name + " you are good");
    console.log("hey " + name + " you are couce is good");
    console.log("hey " + name + " you are good");
}


nice("harry");
nice("rohan");


function sum(a,b) {
    console.log("The sum of " + a + " and " + b + " is: " + (a + b));
}

sum(5, 10);// This will call the function and print the sum of 5 and 10
sum(20, 30);// This will call the function and print the sum of 20 and 30

function sumOptional(a,b,c=3) {// This function takes two required parameters and one optional parameter with a default value of 3
    console.log("The sum of " + a + " and " + b + " is: " + (a + b));
}

sumOptional(5, 10);// This will call the function and print the sum of 5 and 10
sumOptional(20, 30, 40);// This will call the function and print the sum of 20 and 30, ignoring the third parameter


//ARROW FUNCTIONS

const func1 =(x)=>{// This is an arrow function that takes one parameter x
    // Arrow functions are a more concise way to write functions in JavaScript
    // They do not have their own 'this' context, which can be useful in certain situations
    // They are often used for short functions or callbacks
    // They can also be used to create anonymous functions
    console.log("This is an arrow function",x);
}


func1(34);// This will call the arrow function and print the value of x
func1(45);// This will call the arrow function and print the value of x
