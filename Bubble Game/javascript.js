var timer = 60;
var score = 0;
var randomHitNumber = 0;

function createBubble(){
    var clutter="";

    for(var i = 1; i<=102; i++){
        var randomNumber = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${randomNumber}</div>`;
    }

    document.querySelector("#panel-btm").innerHTML = clutter;
}


function time(){
    var clock = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timer").textContent = timer;
        }
        else{
            var heading = document.querySelector("#panel-btm").innerHTML = `<h1>GAME OVER</h1>`;
            clearInterval(clock);
        }

        console.log(timer);
        
    },1000);
}

function hit(){
    randomHitNumber = Math.floor(Math.random()*10);
    document.querySelector(".hitTime").textContent = randomHitNumber;
}

function scoreIncrease(){
    score += 10;
    document.querySelector(".score").textContent = score;
}

document.querySelector("#panel-btm").addEventListener("click", function(details){
    var clickedNumber = Number(details.target.textContent);
    if(clickedNumber === randomHitNumber){
        scoreIncrease();
        createBubble();
        hit();
    }
    else{
        hit();
        createBubble();
    }
})

time();
createBubble();





