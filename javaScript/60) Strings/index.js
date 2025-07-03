let a="harry";
console.log(a[0]); 
console.log(a[1]); 
console.log(a[2]); 
console.log(a[3]); 
console.log(a[4]); 
console.log(a[5]); 
console.log(a[6]); // undefined, as 'harry' has only 5 characters

let name="harry";
let friend="rohan";

console.log(name + " is a friend of " + friend); // Concatenation using the + operator

console.log(`${name} is a friend of ${friend}`); // Template literals for string interpolation


console.log("harry\"bai");// Escaping double quotes in a string

// // String methods and properties
// console.log(name.length); // Length of the string
// console.log(name.toUpperCase()); // Convert to uppercase
// console.log(name.toLowerCase()); // Convert to lowercase
// console.log(name.indexOf("r")); // Index of the first occurrence of 'r'
// console.log(name.lastIndexOf("r")); // Index of the last occurrence of 'r'
// console.log(name.slice(1, 4)); // Extract substring from index 1 to 4 (exclusive)
// console.log(name.replace("harry", "rohan")); // Replace 'harry' with 'rohan'
// console.log(name.includes("ar")); // Check if 'ar' is present in the string         
// console.log(name.startsWith("ha")); // Check if the string starts with 'ha'
// console.log(name.endsWith("ry")); // Check if the string ends with 'ry'
console.log(name.split("r")); // Split the string by 'r' and return an array
console.log(name.trim()); // Remove whitespace from both ends of the string             
console.log(name.charAt(2)); // Get character at index 2
console.log(name.charCodeAt(2)); // Get Unicode of character at index 2
console.log(name.concat(a," is a good friend")); // here a is concatenated to name  
console.log(name.repeat(3)); // Repeat the string 3 times               


// once you have created a string, you cannot change it
// Strings are immutable in JavaScript, meaning you cannot change the characters in a string directly
// Instead, you create a new string with the desired changes