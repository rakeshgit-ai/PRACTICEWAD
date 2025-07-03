console.log("Hey this is tutorial 56 of js");

let age=17;
let grace=2;

console.log(age+grace);
console.log(age*grace);
console.log(age-grace);
console.log(age/grace);
console.log(age**grace);
console.log(age%grace);

if (age+grace >= 18) {
    console.log("You are an adult");
}else{
    console.log("You are not an adult");
}

//operators

//assignment operators

age += grace; // age = age + grace
console.log(age);
 
"3" == 3; // loose equality, checks value only
"3" === 3; // strict equality, checks value and type
"3"==="3"; // true, both are strings

//Logical operators
// && logical AND
// || logical OR
// ! logical NOT

//if else if ladder
let marks = 85; // Example marks

if (marks >= 90) {
    console.log("Grade: A");        
}else if (marks >= 80) {
    console.log("Grade: B");
}   else if (marks >= 70) {
    console.log("Grade: C");
}   else if (marks >= 60) {
    console.log("Grade: D");
}       else if (marks >= 50) {             
}else{
    console.log("Grade: F");
}
// Ternary operator
let result = (marks >= 50) ? "Pass" : "Fail";
console.log(result);