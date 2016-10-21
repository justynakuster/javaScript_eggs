document.addEventListener("DOMContentLoaded", function() {
    var colors = ['rgb(0,128,128)', 'rgb(76,249,37)', 'rgb(255,91,215)', 'rgb(239,0,65)', 'rgb(194,37,249)', 'rgb(164,222,191)', 'rgb(255,227,61)', 'rgb(37,249,233)', 'rgb(251,163,54)', 'rgb(37,115,249)', 'rgb(121,5,122)', 'rgb(180,203,244)'];
    
    $('#score, #timeCount').css("visibility", "hidden");
    
    var intro = document.getElementById('intro');
        intro.addEventListener("click", function(){
        intro.scrollTo('#container',);
        });
    

//ODLICZANIE CZASU PO KLIKNIĘCIU START   
    var start = document.getElementById('start');
    start.addEventListener("click", function(){
            var parentEggs = document.getElementById("container");
            $('#mainColor, #score, #timeCount, #logo').css("visibility", "visible");
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
                    $(this).animate({backgroundColor: rand}, 500);      
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
                    var seconds = 30;
                    var mins = minutes;
                    var parentEggs = document.getElementById("container");
                    
                    function tick() {
                        var counterVal = document.getElementById("time");
                        var current_minutes = mins - 1;
                        seconds--;
                        counterVal.innerHTML =
                        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
                        var result = counterVal.innerHTML;

                        if (result == "0:00") {
                            clearInterval(counter);
                            $('#container, #mainColor, #start').css("visibility", "hidden");
                            $('#clear').css("visibility", "visible");
                            //alert("koniec czasu gry");
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

    });    
//NEW GAME
    var newGame = document.getElementById('clear');
    newGame.addEventListener("click", function(){
        $('#container,#mainColor, #score, #start, #logo').css("visibility", "visible");
        $('#clear').css("visibility", "hidden");
        
//        $(this).attr("disabled", "disabled");
//        block();
//
//        function block() {
//        //alert("blokuje przycisk");
//        setTimeout('$("#start").removeAttr("disabled")', 1500);
//        }
        });
});



