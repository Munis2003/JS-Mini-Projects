let displayScreen = document.querySelector("#main-box");
let startBtn=document.querySelector("#start")
let stopBtn=document.querySelector("#stop")
let resetBtn=document.querySelector("#reset")

var timeoutId = null;
var ms = 0;
var sec = 0;
var min = 0;

function startTime(flag){
    if (flag) {
        startBtn.disabled = true;
    }
 
    timeoutId = setTimeout(function() {
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
 
        ms++;
 
        if (ms == 100) {
            sec++;
            ms = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (ms < 10) {
            ms = '0' + ms;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
 
        displayScreen.innerHTML = min + ':' + sec + ':' + ms;
 
        // calling start() function recursivly to continue stopwatch
        startTime();
 
    }, 10); // setTimeout delay time 10 milliseconds
}
 
function stopTime(){
    clearTimeout(timeoutId);
    startBtn.disabled = false;
}
function resetTime(){
    ms = 0;
    sec = 0;
    min = 0;
    clearTimeout(timeoutId);
    displayScreen.innerHTML = "00:00:00";
    startBtn.disabled = false;
}

startBtn.addEventListener("click",startTime)
stopBtn.addEventListener("click",stopTime)
resetBtn.addEventListener("click",resetTime)