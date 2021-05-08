const startingMinutes = prompt("How many minutes timer do you want:");
let time = startingMinutes*60;
const count = document.getElementById('countdown');
document.getElementById("min").innerHTML=`${startingMinutes} Minutes Timer`;
var x=setInterval(updateCountdown,1000);


function updateCountdown(){
    const minutes=Math.floor(time/60);
    let seconds=time % 60;
    seconds= seconds < 10 ? '0' + seconds : seconds;
    count.innerHTML=`${minutes}:${seconds}`;
    time--;
    if(minutes==0 && seconds==0){
       clearInterval(x);
    }
}

