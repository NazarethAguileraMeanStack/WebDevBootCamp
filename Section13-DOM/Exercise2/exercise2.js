


// Come up with 4 different ways to select the first paragraph
let firstParagraph = document.getElementById("first");
firstParagraph.style.color = "red";

firstParagraph = document.getElementsByClassName("special");
firstParagraph[0].style.color = "blue";

firstParagraph = document.querySelector("p");
firstParagraph.style.color = "yellow";

firstParagraph = document.querySelectorAll("p");
firstParagraph[0].style.color = "green";