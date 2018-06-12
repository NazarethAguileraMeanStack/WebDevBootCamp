


//JavaScript Objects

let personArray = ["Cindy", 32, "Missoula"];

//^^^This format is not meaningful.

let personObject = {
    name: "Cindy",
    age: 21,
    city: "Los Angeles"
};

//Key Value Pairs. No Order!

console.log(personObject.name);
console.log(personObject["name"]);

console.log(personObject);

//Cannot use dot notation if property starts with a number.
//Cannot use dot notation if property has a space in it. (Not good practice anyway!)

//Update data

personObject.name = "Nazareth";
console.log(personObject);

//You can instantiate an empty object, then add properties.
//You can instantiate an object with literals.
//You can instantiate with new keyword (we will learn more about this later.)

personObject.hometown = "Palmdale";
console.log(personObject);


//Array of Objects
let stores = [
    {
        name: "Target",
        location: "Palmdale"
    },
    {
        name: "Wal-Mart",
        location: "Lancaster"
    },
    {
        name: "Vons",
        location: "Burbank"
    }
];


console.log(stores);
console.log(stores[0]);
console.log(stores[1].name);


//Retreive an Object Property Exercise
//Retreive "Malfoy"

let someObject = {
    friends: [{name: "Malfoy"}, {name: "Crabbe"}, {name: "Goyle"}],
    color: "baby blue",
    isEvil: true,
};

console.log(someObject.friends[0].name);


/*
MovieDB

Create an Array of movie objects. Each movie should have
a title, rating, and hasWatched properties. Iterate through
the array and print out something that looks like...
You have watched "In Bruges" - 5 stars
You have not seen "Frozen" - 4.5 stars
You have not seen "Mad Max Fury Road" - 5 stars
You have not seen "Les Miserables" - 3.5 stars

USE YOUR OWN MOVIES

*/

let moviesDB = [
    {
        title: "Solo: A Star Wars Movie",
        rating: 4.0,
        hasWatched: false,
    },
    {
        title: "Avengers: Infinity War",
        rating: 5.0,
        hasWatched: true,
    },
    {
        title: "Deadpool 2",
        rating: "5.0",
        hasWatched: false,
    },
    {
        title: "Incredibles 2",
        rating: 4.5,
        hasWatched: false,
    },
    {
        title: "Ready Player One",
        rating: 4.8,
        hasWatched: true,
    }
];


function moviesList(arr){
    return arr.map((element)=>{
        let response = "";
        if (element.hasWatched == true){
            response = "You have watched";
        } else {
            response = "You have not seen";
        }
        console.log(`${response} "${element.title}" - ${element.rating} stars`);
    });
}


moviesList(moviesDB);








