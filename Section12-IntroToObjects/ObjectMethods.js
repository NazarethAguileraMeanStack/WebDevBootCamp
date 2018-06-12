

//Objects can have Functions called Methods!
//Methods are functions which are called upon in the object.
//Good way to prevent namespace collisions
//

let obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y){
        return x + y;
    },
    favPhrase: function(){
        return "I hate people who don't signal";
    }
};

console.log(obj);
console.log(obj.add(10,3));
console.log(obj.favPhrase());






