

//Boolean Logic is a statement that evalues to true or false.
//e.g. userIsSignedIn, userIsAge18, etc

//> Greater than
//>= Greater than or equal to
//< Less than
//<= Less than or equal to
//== equal to
//!= Not Equal to
//=== Equal type and value
//!== Not Equal type and value


//Logical Operators
//&& AND    both must be true    x && y
// || OR    one or both must be true   a || b
// ! NOT  negates the value of whatever it is applied to   !(c == d)


let x = 10;
let y = "a";

let result = (y === "b" || x >= 10);
console.log(result);

let a = 3;
let b = 8;

let result2 = (!(a == "3" || a == b) && !( b != 8 && a <= y));
console.log(result2);


let truthy = !"Hello";
console.log(truthy);

//Falsy Values
/*
false
0
""
null
undefined
NaN

Everything else is truthy
*/


let str = "";
let msg = "haha!"
let isFunny = "false";

let result4 = !((str || msg) && isFunny);
console.log(result4);



