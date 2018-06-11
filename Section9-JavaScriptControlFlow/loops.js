


//DRY Code
//DONT REPEAT YOURSELF


/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log(11);
*/


//Loops!

let count = 1;
while (count < 6){
    console.log(`Count is: ${count}`);
    count++;
}

while (count <= 20){
    console.log(`Count is: ${count}`);
    count+=2;
}


let str = "hello";
let iterate = 0;

while (iterate < str.length){
    console.log(str[iterate]);
    iterate++;
}

//DO NOT CREATE AN INFINITE LOOP
//AN INFINITE LOOP OCCURS WHEN THE TERMINATING CONDITION IS NEVER TRUE

/*
let badCode = true;
while (badCode){
    console.log("WILL NOT WORK");
}
 */

