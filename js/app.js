document.addEventListener("DOMContentLoaded", function() {
    var colors = ['olive', 'lime', 'pink', 'red', 'violet', 'lightgreen', 'yellow', 'turquoise', 'orange', 'blue', 'purple', 'lightblue'];

    $('#score, #timeCount').css("visibility", "hidden");
    
//ODLICZANIE CZASU PO KLIKNIĘCIU START   
    var start = document.getElementById('start');
        start.addEventListener("click", function(){
            var parentEggs = document.getElementById("container");
            $('#mainColor, #score, #timeCount').css("visibility", "visible");
            $('#start, #instruction').css("visibility", "hidden");
            
        //USTAWIENIE KOLOROWYCH JAJEK W TABLICY    
        for(var i = 0; i < 105; i++){
            var rand = colors[Math.floor(Math.random()*colors.length)];
            var eggs = document.createElement("div");
            //console.log(rand);
            eggs.classList.add("eggs");
            eggs.style.backgroundColor = rand;
            //console.log(eggs);
            parentEggs.appendChild(eggs);                    
        }
        //GŁÓWNY KOLOR DO WYSZUKANIA    
            var mainColor = document.getElementById("mainColor");
            //console.log(mainColor);
            function changeColor(){
                rand = colors[Math.floor(Math.random() * colors.length)];
                mainColor.style.backgroundColor = rand;
            }
            changeColor();
            var time = setInterval(function() {
                changeColor();}, 4000);
    
        //PORÓWANIE KOLORU GŁÓWNEGO Z KLIKNIĘTYM JAJKIEM
            var eggsClick = document.querySelector("#finalScore");
            var jajo = document.querySelectorAll('.eggs');
            var tempScore = 0;
            var score = document.getElementById('finalScore');
                    score.innerHTML = tempScore;
            for(var i = 0 ; i < jajo.length ; i++) { 
                jajo[i].addEventListener("click", function(){
                    tempScore = parseInt(score.innerHTML);
                    console.log(this.style.backgroundColor + mainColor.style.backgroundColor);
                    //console.log(tempScore);
                    //console.log(mainColor.style.backgroundColor);
                    //console.log(this.style.backgroundColor);
                    rand = colors[Math.floor(Math.random() * colors.length)];

        //NALICZANIE PKT ZA KLIKNIĘTE JAJKA           
                if(mainColor.style.backgroundColor == this.style.backgroundColor){
                   console.log("jestem równy");                               
                    var final = tempScore + 5;
                    console.log(final);
                    score.innerHTML = final;
                } else {               
                    var final = tempScore - 5;
                    console.log(final);
                    score.innerHTML = final;    
                } 
                $(this).css("background-color", rand); 
            }); 
        }
                var counter = setInterval(timer, 1000); //1000 will  run it every 1s.
                var IsFunctionCalled = false;

                function timer() {   
                    var val = document.getElementById("start");
                    if (val != null) {
                        var PopUpTimeDuration = 1; 
                        if (IsFunctionCalled == false) {
                            IsFunctionCalled = true 
                            countdown(parseInt(PopUpTimeDuration));}
                        }
                    }
                function countdown(minutes) {
                    var seconds = 10;
                    var mins = minutes;
                    var parentEggs = document.getElementById("container");
                    
                    function tick() {
                        var counterVal = document.getElementById("time");
                        var current_minutes = mins - 1
                        seconds--;
                        counterVal.innerHTML =
                        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
                        var result = counterVal.innerHTML;

                        if (result == "0:00") {
                            clearInterval(counter);
                            $('#container').css("visibility", "hidden");
                            $('#mainColor').css("visibility", "hidden");
                            $('#start').css("visibility", "hidden");
                            $('#clear').css("visibility", "visible");
                            return false; 
                        } 
                        if (seconds > 0) {
                           setTimeout(tick, 1000);
                        } else {
                            if (mins >= 1) {
                                countdown(mins - 1); 
                            }
                        }
                    }
                    tick();
                }
            preventE
});    
//NEW GAME
    var end = document.getElementById('clear');
    end.addEventListener("click", function(){
        $('#container,#mainColor, #score, #start').css("visibility", "visible");
        $('#clear').css("visibility", "hidden");
        
        });
});



