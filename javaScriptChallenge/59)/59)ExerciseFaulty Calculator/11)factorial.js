// This code calculates the factorial of 4 using a for loop
let fact=1;
for (let i = 4; i >= 1; i--) {
     fact *= i; 

}
console.log(fact); // prints the factorial of 4

let a=6;

function fact(Number) {
    let arr=Array.from(Array(Number+1).keys())
    let c=arr.slice(1).reduce((a,b)=>{
        return a*b;
    })
    return c;
}
fact(a); // returns 720, which is the factorial of 6
console.log(fact(a)); // prints 720    
///////////////////////////////////////////////////////////////////////////////////

