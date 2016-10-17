document.addEventListener("DOMContentLoaded", function() {

    var colors = ['olive', 'lime', 'pink', 'red', 'violet', 'lightgreen', 'yellow', 'turquoise', 'orange', 'blue', 'purple', 'lightblue'];
    
    for(var i = 0; i < 105; i++){
        var rand = colors[Math.floor(Math.random() * colors.length)];
        var eggs = document.createElement("div");
        console.log(rand);
        eggs.classList.add("eggs");
        
        var parentEggs = document.getElementById("container");
        
        eggs.style.backgroundColor = rand;
        console.log(eggs);
        
        parentEggs.appendChild(eggs);
        
        eggs.addEventListener("click", function(){
            rand = colors[Math.floor(Math.random() * colors.length)];         
//        $(this).css("visibility", "hidden");
          $(this).css("background-color", rand);           
        });                          
    }
    
    var mainColor = document.getElementById("findColor");
//    console.log(mainColor);
    
    function changeColor(){
        rand = colors[Math.floor(Math.random() * colors.length)];
        mainColor.style.backgroundColor = rand;
    }
    
    changeColor();
    
    var time = setInterval(function() {
        changeColor();}, 5000);
    
    
});



