console.log("hey dom children parent sibling nodes tutorial on js");

let cont=document.body.childNodes[1];
undefined

let cont=document.body.childElemen;
undefined

let cont=document.body.childNode[1];
VM947:1 Uncaught TypeError: Cannot read properties of undefined (reading '1')
    at <anonymous>:1:33
(anonymous) @ VM947:1

let cont=document.body.childNodes[1];
undefined

cont
<div class=​"container">​…​</div>​
cont.sty
undefined

cont.firstElementChild
<div class=​"box">​box1​</div>​
cont.lastElementChild.style.backgroundColor="gold";
'gold'

cont.firstElementChild.firstElementChild;
null

cont.firstElementChild.childNodes;
NodeList [text]

document.body.firstElementChild.childNodes;
NodeList(9) [text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild.children
HTMLCollection(4) [div.box, div.box, div.box, div.box]
