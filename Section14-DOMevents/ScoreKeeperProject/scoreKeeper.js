


let playerOneScore = document.getElementById("playerOneScore");
let playerTwoScore = document.getElementById("playerTwoScore");
let playingToNum = document.getElementById("playingToNum");
let playerOneIncrease = document.getElementById("playerOneIncrease");
let playerTwoIncrease = document.getElementById("playerTwoIncrease");
let reset = document.getElementById("reset");
let player1Total = 0;
let player2Total = 0;
let bestOfNum = document.getElementById("bestOf");
bestOfNum.value = 5;

playerOneIncrease.addEventListener('click', function(){
    
    if(player1Total < bestOfNum.value){
        player1Total++;
        playerOneScore.innerText = `${player1Total}`;
    }

    if (player1Total == bestOfNum.value){
        playerOneScore.style.color = "green";
        playerTwoIncrease.disabled = true;
        bestOfNum.disabled = true;
    }

});

playerTwoIncrease.addEventListener('click', function(){
    
    if(player2Total < bestOfNum.value){
        player2Total++;
        playerTwoScore.innerText = `${player2Total}`;
    }
    if (player2Total == bestOfNum.value){
        playerTwoScore.style.color = "green";
        playerOneIncrease.disabled = true;
        bestOfNum.disabled = true;

    }

});

reset.addEventListener('click', function(){
    playerOneIncrease.disabled = false;
    playerTwoIncrease.disabled = false;
    player1Total = 0;
    player2Total = 0;
    playerOneScore.innerText = `${player1Total}`;
    playerTwoScore.innerText = `${player2Total}`;
    playerOneScore.style.color = "black";
    playerTwoScore.style.color = "black";
    bestOfNum.disabled = false;
});


bestOfNum.addEventListener('change', function(){
    if (bestOfNum.value < 0){
        bestOfNum.value == 0;
    }
    playingToNum.innerText = `${bestOfNum.value}`;
});