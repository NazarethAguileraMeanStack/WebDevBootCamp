
//Intializing the colors of the Squares and number of Squares (6 by default)
let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);



//Variables. Setting the intial layout and colors
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let easyBTN = document.getElementById("easyBTN");
let hardBTN = document.getElementById("hardBTN");



//Easy button. Function for when easy button is clicked.
easyBTN.addEventListener('click', function(){
    easyBTN.classList.add("selected");
    hardBTN.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    resetButton.textContent = "New Colors";
    messageDisplay.innerText = "";
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});


//Hard button. Function for when the hard button is clicked.
hardBTN.addEventListener('click', function(){
    hardBTN.classList.add("selected");
    easyBTN.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    resetButton.textContent = "New Colors";
    messageDisplay.innerText = "";
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});



//reset button
resetButton.addEventListener('click', function(){
    //generate all new colors
    colors = generateRandomColors(numberOfSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.innerText = pickedColor;
    resetButton.textContent = "New Colors";
    //change colors of squares
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

});


//Displaying the RGB Color in the Header
colorDisplay.innerText = pickedColor;
for (let i = 0; i < squares.length; i++){
    //adds intial color to squares.
    squares[i].style.backgroundColor = colors[i];
    //adds click listeners to squares
    squares[i].addEventListener('click', function(){
        //grab color of clicked square
        let clickedCOlor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedCOlor == pickedColor){
            messageDisplay.innerText = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedCOlor);
            h1.style.backgroundColor = clickedCOlor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.innerText = "Try Again";
        }
    });
}


//Function looping through all the squares adn assigning a new color.
function changeColors(color){
    //loop through all squares
    for (let i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

//Picks one the generated colors to be the "Correct" color.
function pickColor(){
    //pick a random number
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


//pushes colors into an array to be iterated through the number of squares.
function generateRandomColors(num){
    //make an array
    let arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i ++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}


//function generating random color
function randomColor(){
    //pick a red from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick a green from 0 - 255
    let g = Math.floor(Math.random() * 256);
    //pick a blue from 0 - 255
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
    
}