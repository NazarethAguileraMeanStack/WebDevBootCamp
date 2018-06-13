


let needyButton = document.getElementById("needy");

needyButton.addEventListener('click', function(){
    needyButton.innerText = "awwwww yesssssss."
});


needyButton.addEventListener('mouseleave', function(){
    if (needyButton.innerText == "awwwww yesssssss.")
        {
            needyButton.innerText = "Hi, I'm Very needy. Please Click Me!!!!!!";
        }
});

needyButton.addEventListener('click', function(){
    needyButton.classList.toggle("big");
});