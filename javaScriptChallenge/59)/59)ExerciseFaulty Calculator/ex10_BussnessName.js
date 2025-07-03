function Generator(x,y,z){
    let num = Math.floor(Math.random()*3)
    if(num == 0)
    return x
    else if(num == 1)
    return y
    else
    return z
}

console.log("Generated Name is "+Generator("Crazy","Amazing","Fire")+" "+Generator("Engine","Food","Garment")+" "+Generator("Bros","Limited","Hub"))

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
let obj1 = {
    "1": "Crazy",
    "2": "Amazing",
    "3": "Fire"
}

let obj2 = {
    "1": "Engine",
    "2": "Foods",
    "3": "Garments"
}

let obj3 = {
    "1": "Bros",
    "2": "Limited",
    "3": "Hub"
}

let randomNum1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let randomNum2 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let randomNum3 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

alert("The Company Name is" + " " + obj1[randomNum1] + " " + obj2[randomNum2] + " "  + obj3[randomNum3] + " " )


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
};
let obj2 = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
};
let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
};

function getRandomFromObject(obj) {
    let rand = Math.floor(Math.random()*3)+1;
    return obj[rand];
}

let name = getRandomFromObject(obj1)+" "+ getRandomFromObject(obj2)+ " " +getRandomFromObject(obj3)
console.log(name);

// Function to generate a random business name

let obj1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"   
};
let obj2 = {          
    1: "Engine",
    2: "Foods",
    3: "Garments"
};  
let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
};

function getrandom(obj){
       let rand=Math.floor(Math.random() * 3) + 1;
       return obj[rand];
}

console.log(getrandom(obj1) + " " + getrandom(obj2) + " " + getrandom(obj3));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let rand=Math.random();
let first,second,third;

if(rand<0.33){
    first="Crazy";  
}else if(rand<0.66 && rand>=0.33){
    first="Amazing";    
}
else{
    first="Fire";    
}

if(rand<0.33){
    second="Engine";    
}
else if(rand<0.66 && rand>=0.33){
    second="Foods";    
}else{
    second="Garments";    
}

if(rand<0.33){
    third="Bros";   
}
else if(rand<0.66 && rand>=0.33){
    third="Limited";
}
else{
    third="Hub";    
}

console.log(first+" "+second+" "+third);

