const hrs = document.getElementById("hrs");
const mins = document.getElementById("mins");
const sec = document.getElementById("sec");


function setTime(){
    const date = new Date();

    const currentHrs  = date.getHours();
    const currentMins = date.getMinutes();
    const currentSec  = date.getSeconds();

    hrs.innerHTML  = (currentHrs < 10 ? "0" : '' ) + currentHrs;
    mins.innerHTML = (currentMins < 10 ? "0" : '') + currentMins;
    sec.innerHTML  = (currentSec < 10 ? "0" : '' ) + currentSec;
}

setInterval(() => {
    setTime()
},1000)