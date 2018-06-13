


//GetElementById
let tag = document.getElementById("highlight");


//GetElementByClassName
//returns a node list! Not a traditional array.
let tags = document.getElementsByClassName("bolded");
console.log(tags[0]);

//GetElementByTagName
//also returns a node list! you can use moreTags[0], and moreTags.length
let moreTags = document.getElementsByTagName("li");


//QuerySelector
//replicates all other document selectors like getElementById and getElementByClassName
//Uses a CSS selector!!!!!!! Think CSS!!!!!
//Will always return 1 Element!!! ONLY THE FIRST ELEMENT!!!!!!

let myTag = document.querySelector("#highlight");
let myTag2 = document.querySelector(".bolded");


//QuerySelectorAll
//THINK CSS!!!!!
//You get a node list as before.
//Still works with only 1 instance in the DOM.
let allTags = document.querySelectorAll(".bolded");