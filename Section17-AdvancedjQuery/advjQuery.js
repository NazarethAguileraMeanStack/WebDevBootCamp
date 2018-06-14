





$("h1").click(function(){
    alert("h1 clicked!");
});


$("button").click(function(){
    $(this).css("backgroundColor", "pink");
});

$("input").keypress(function(event){
    if (event.which === 13){
        alert("you pressed enter!");
    }
});

$("h1").on("click", function(){
    $(this).css("color", "purple");
});


$("button").on("mouseenter", function(){
    $(this).css("fontWeight", "bold");
    $(this).fadeOut(1000);
});

$("button").on("mouseleave", function(){
    $(this).css("fontWeight", "normal");
    $(this).fadeIn(1000);
});







