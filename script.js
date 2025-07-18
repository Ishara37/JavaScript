let seconds=0;
let minutes=0;
let hours=0;
let interval=null;
let isRunning=false;
function updateDisplay(){
    const display=document.getElementById("display");
    const h=String(hours).padStart(2,"0");
     const m=String(minutes).padStart(2,"0");
      const s=String(seconds).padStart(2,"0");
      display.textContent=`${h}:${m}:${s}`;   
}
function startTimer(){
    if(!isRunning){
        isRunning=true;
        interval=setInterval(()=>{
            seconds++
            if(seconds===60){
                seconds=0;
                minutes++;
                if(minutes===60){
                    minutes=0;
                    hours++;
                }
            }
            updateDisplay();},1000);
        }
    }
    function resetTimer(){
        stopTimer();
        seconds=0;
        minutes=0;
        hours=0;
        updateDisplay();
    }
         function stopTimer() {
    isRunning = false;
    clearInterval(interval);
}


