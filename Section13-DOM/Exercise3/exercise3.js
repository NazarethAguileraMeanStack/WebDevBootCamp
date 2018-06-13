


/*
DOM MANIPULATION

We're going to be covering different ways of:
-Changing an element's style
-adding/removing classes
-changing the content of a tag
-changing attributes
*/


let tag = document.getElementById("highlight");

tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";


// dont use javascript if you intend for it to be static.


tag.classList.add("white-class");


setInterval( function(){
    tag.classList.toggle("white-class");
}, 1000);


let paragraph = document.querySelectorAll("p");

paragraph[0].textContent = "OMG LOL";

