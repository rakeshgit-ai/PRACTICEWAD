// Arrays in JavaScript
// Arrays are used to store multiple values in a single variable.
// They are a special type of object that can hold a list of values.
// Arrays can hold values of any type, including numbers, strings, and even other arrays.
// Arrays are zero-indexed, meaning the first element is at index 0.
//arrays are mutable, meaning you can change their elements after they are created.


let arr=[0,1,2,3,4,5,6,7,8,9];

console.log(arr[9]); // 9
console.log(arr[0]); // 0

console.log(arr.length); // 10
console.log(typeof arr); // object

arr[0]=100;

console.log(arr[0]); // 100

console.log(arr.toString()); // 100,1,2,3,4,5,6,7,8,9 converts the array to a string

console.log(arr.join(" and ")); // 100 and 1 and 2 and 3 and 4 and 5 and 6 and 7 and 8 and 9 joins the array elements with " and "

arr.pop(); // removes the last element from the array 
console.log(arr); // [100, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(arr.push("harry")); // 10
console.log(arr); // [100, 1, 2, 3, 4, 5, 6, 7, 8, "harry"]

arr.shift(); // removes the first element from the array
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, "harry"]

arr.unshift("jack"); // adds an element to the beginning of the array
console.log(arr); // ["jack", 1, 2, 3, 4, 5, 6, 7, 8, "harry"]

delete arr[0]; // deletes the first element from the array
console.log(arr); // [ <1 empty item>, 1, 2, 3, 4, 5, 6, 7, 8, "harry"]

let a1=[1,2,3];
let a2=[4,5,6];
let a3=[7,8,9];

console.log(a1.concat(a2,a3)); // concatenates the arrays
console.log(a1); // [1, 2, 3] (a1 is not modified, concat returns a new array)


let arr1=[2,7,1,5,9,5];
arr1.sort(); // sorts the array in ascending order
console.log(arr1); // [1, 2, 5, 5, 7, 9]



// sort() method sorts the elements of an array in place and returns the sorted array.
// The default sort order is according to string Unicode code points.
// If you want to sort numbers, you need to provide a compare function.
// The compare function should return a negative, zero, or positive value, depending on the arguments.
// If the return value is negative, the first argument is sorted before the second.
// If the return value is positive, the second argument is sorted before the first.


let number=[2,7,8,9,5,4,3];
console.log(number.slice(1,4)); // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.

number.splice(1,2); // changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log(number); // [2, 8, 9, 5, 4, 3]

number.splice(1,2,333,444); // removes 2 elements from index 1 and adds 333 and 444
console.log(number); // [2, 333, 444, 9, 5, 4, 3]

let number2=[1,98,34,22,34,88];
// for (let i = 0; i < number2.length; i++) {
//     const element = number2[i];
//     console.log(element); // prints each element of the array
    
// }

number2.forEach((element,index,array)=>{
    console.log(element,index,array); // prints each element, its index, and the array itself   
 })

 let obj = {
    a:1,
    b:2,
    c:3
 }

 for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element); // prints each key and its value in the object
    }
 }

 for (const element of number) {
    console.log(element); // prints each element of the array
 }

 let arr4=[1,13,5,7,11];
 let newarr=[];

//  for (let index = 0; index < arr4.length; index++) {
//     const element = arr4[index];
//     newarr.push(element**2); // squares each element and adds it to the new array
    
//  }

//  console.log(newarr); // prints the new array with squared elements

let ar=arr4.map((e)=>{
    return e**2; // squares each element and returns a new array        )
});

console.log(ar); // prints the new array with squared elements

//filter method creates a new array with all elements that pass the test implemented by the provided function.
const greaterThanSeven=(e)=>{
    if(e>7){
        return true; // returns true if the element is greater than 7       
    }
    return false; // returns false if the element is not greater than 7
}; // filters the array with the provided function

console.log(arr4.filter(greaterThanSeven)); // prints the new array with elements greater than 7

// reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const red=((a,b)=>{
    return a*b; // multiplies each element and returns the product
})

console.log(arr4.reduce(red)); // prints the product of all elements in the array

Array.from("hello"); // creates a new array from the string "hello"
console.log(Array.from("hello")); // prints ['h', 'e', 'l', 'l', 'o']

let i=1;
const factorial=(n)=>{
    if(i==0 || n==1){
        return 1; // returns 1 if n is 0 or 1
    }
    return 
}
