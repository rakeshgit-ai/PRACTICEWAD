console.log("hey selecting by ids classes and more tutorial on js");

// let boxes=document.getElementsByClassName("box")
// console.log(boxes);

// boxes[2].style.backgroundColor="red"


// document.getElementById("red").style.backgroundColor="green";

document.querySelector(".box").style.backgroundColor="blue";
// this will select the first element with class box and change its background color to blue

// document.querySelectorAll(".box").style.backgroundColor="blue";
// this will not work because querySelectorAll returns a NodeList, not a single element

console.log(document.querySelectorAll(".box"));
// NodeList(4) [div.box, div.box, div.box, div.box]

document.querySelectorAll(".box").forEach((box)=>{
    box.style.backgroundColor="blue";
});
// this will change the background color of all elements with class box to blue