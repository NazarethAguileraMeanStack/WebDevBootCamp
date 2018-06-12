

// Introduction to Array Methods

let color = ["red", "blue", "green"];

//Push Method - Adding something to the end of an array.

color.push("purple");
console.log(color);

color.push("orange");
console.log(color);

//Pop removes the last item in the array
console.log(color.pop());
console.log(color);
console.log(color.pop());
console.log(color);

//unshift - Add to the front of an array
//Shift - removes the first item in the array
console.log(color.unshift("yellow"));
console.log(color);
console.log(color.unshift("white"));
console.log(color);
console.log(color.shift());
console.log(color);
console.log(color.shift());
console.log(color);


//IndexOf
console.log(color.indexOf("blue"));
console.log(color.indexOf("green"));
console.log(color.indexOf("black"));
console.log(color.indexOf("periwinkle"));

//Slice - used to copy parts of an array

console.log(color.slice(0,2));
console.log(color);
console.log(color.slice(1,3));
console.log(color);
console.log(color.slice(0,1));



//Array Problem Set
/*Write a function printReverse() that takes an
array as an argument and prints out the elements
in the arry in reverse order. Dont reverse the actual
array. */


function printReverse(array){
    for (let i = array.length; i >=0; i--){
        console.log(array[i]);
    }
}

printReverse([2,3,5,7,8,5]);
printReverse(["a", "b", "c", "d", "e"]);
printReverse(["Hello", "World", "Beatiful", "Day"]);


/*Write a function isUniform() which takes and array
as an arguments and returns true if all elements in
the array are identical. */


function isUniform(arr){
    return arr.every((element)=>{return arr[0] == element;});
}

console.log(isUniform([1,2,1,1]));
console.log(isUniform([1,1,1,1,1]));
console.log(isUniform(["Happy"]));

/* Write a function sumArray() that accepts an array of numbers
and returns the sum of all numbers in the array.  */

function sumArray(myArray){
    return myArray.reduce((total, element)=>{return total += element});
}
console.log(sumArray([1,2,3,4,5]));
console.log(sumArray([10,20,30,40]));
console.log(sumArray([1.1,2.2, 3.3, 4.4]));


/* Write a function max() that accepts an array of numbers
and returns the maximum number in the array. */


function max(myArr){
    return Math.max(...myArr);
}
console.log(max([3,7,4,3]));
console.log(max([4,7,8,234,664,2342,7657]));
console.log(max([24234,634563454,74735242,45,47546345634,4754645]));

