

/*
The documemt comes with a bunch of methods for selecting
elements. We're going to learn about the following 5:

document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll();

*/





let h1 = document.querySelector("h1");
h1.style.color = "pink";


let body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
    if (isBlue){
        body.style.background = "white";
    } else {
        body.style.background = "blue";
    }
    isBlue = !isBlue;
}, 3000);