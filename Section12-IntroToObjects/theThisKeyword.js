



//Underscore.js is a bunch of functions that you can use!


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


let comments = {};
comments.data = ["Good job", "I hate you!", "First!"];

comments.print = function(){
    this.data.forEach(function(element){
        console.log(element);
    });
}

comments.print();