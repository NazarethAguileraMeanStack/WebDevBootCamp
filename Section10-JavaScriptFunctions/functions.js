


//Functions
/*
Function let us wrap code into REUSABLE packages.
CORE pieces of JavaScript
*/


function doSomething(){
    console.log("Hello World");
}

doSomething();


//Arguments - inputs for the function

function add(num1,num2){
    console.log(num1 + num2);
}

add(3,4);
add(9,8);
add(13,14);
add(70,7);


function greeting(name){
    console.log(`Hello ${name}!`);
}

greeting("Nazareth");
greeting("Obi Wan Kenobi");
greeting("Frodo");


//The return keyword
//Output of a function


function square(x){
    return x * x;
}

console.log(`Number Squared is ${square(104)}`);



function capitalize(word){
    return word.toUpperCase();
}

console.log(`Scream and ${capitalize("Shout")}`);

//Function Expressions can be overwritten!!! So be careful not to overwite unintentionally!


//Function is Even      isEven(4) True
function isEven(number){
    if (number % 2 == 0){
        return true;
    }
    return false;
}

console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(4));
console.log(isEven(5));


//Function Factorial    factorial(5) 120


function factorial(testNumber){
    let total = 1;
    for (let i = testNumber; i > 1; i--){
        total *= i;
    }
    return total;
}
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(4));




//Function kebabToSnake     kebabToSnake('hello-world') hello_world

function kebabToSnake(testWord){
    return testWord.replace(/-/g, "_");
}
console.log(kebabToSnake("Hello-World"));
console.log(kebabToSnake("Kebab-To-Snake"));
console.log(kebabToSnake("LOl-LOL-LOL-LOL"));
console.log(kebabToSnake("I-Am-SoGood-At-THis"));



//Always be aware of the scope of your code!



