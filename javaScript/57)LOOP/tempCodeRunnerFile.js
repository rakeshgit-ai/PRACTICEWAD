
let obj={
    name:"harry",
    role:"programmer",
    company:"codewithharry",
}

for (const key in obj) {
   const element = obj[key];
    console.log(`${key} : ${element}`);
}
