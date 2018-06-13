



let x = document.getElementById("rainbow");

x.addEventListener('click', function(){
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);

    let myBody = document.querySelector("body");
    myBody.style.backgroundColor = `rgb(${a},${b},${c})`;
});


