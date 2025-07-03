console.log("hey iam tutorial on loops in js");

let a=1;
for (let i = 0; i < 10; i++) {
   
    console.log(a+i);
}

let obj={
    name:"harry",
    role:"programmer",
    company:"codewithharry",
}

for (const key in obj) {
   const element = obj[key];
    console.log(`${key} : ${element}`);
}

for (const C of "harry") {
    console.log(C);
}

//while loop
let i=0;
while (i<6) {
    console.log(i);
    i++;
}

//do while loop
// do while loop will execute at least once
let j=6;
do {
    console.log(j);
    j++;
} while (j<6);// do while loop will execute at least once even if the condition is false
