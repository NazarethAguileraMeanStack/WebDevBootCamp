

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
