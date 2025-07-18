const counter=document.getElementById("counter");
let count = 0;
function increase(){
    count++;
    counter.textContent=count;
}
function decrease(){
    count--;
    counter.textContent=count;

}
function reset(){
    count=0;
    counter.textContent=count;
}