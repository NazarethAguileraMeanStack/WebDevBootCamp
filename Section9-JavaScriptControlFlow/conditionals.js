

//Conditional Statements: if, else if, else




//Bouncer at a club venue


let age = parseInt(prompt("Welcome to the club!. How old are you?"));

if (age < 0){
    alert("ERROR");
}
else if (age < 18){
    alert("Sorry you are not old enough to enter");
    if (age % 2 != 0) {
        alert("Your age is odd");
    }
    if (Number.isInteger(Math.sqrt(age)) ){
        alert("Perfect Square");
    }
}
else if (age < 21){
    alert("You can enter but cannot drink");
    if (age % 2 != 0) {
        alert("Your age is odd");
    }
    if (Number.isInteger(Math.sqrt(age)) ){
        alert("Perfect Square");
    }
}
else if (age === 21) {
    alert("Happy 21st Birthday!");
    if (age % 2 != 0) {
        alert("Your age is odd");
    }
    if (Number.isInteger(Math.sqrt(age)) ){
        alert("Perfect Square");
    }
}
else {
    alert("Come on in. You can drink.");
    if (age % 2 != 0) {
        alert("Your age is odd");
    }
    if (Number.isInteger(Math.sqrt(age)) ){
        alert("Perfect Square");
    }
}