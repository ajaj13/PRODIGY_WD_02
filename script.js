let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let milisec = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let flag=false;

start.addEventListener("click", function(){
    flag = true;
    StopWatch();
});

stop.addEventListener("click", function(){
    flag = false;
    StopWatch;
} );

reset.addEventListener("click", function(){
    flag = false;
    StopWatch();
    document.getElementById("milisec").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    milisec = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

})

function StopWatch(){
    if(flag){
        milisec++;

        if(milisec == 100){
            seconds++;
            milisec = 0;
        }

        if(seconds == 60){
            minutes++;
            seconds = 0;
            milisec = 0;
        }

        if(minutes == 60){
            hours++;
            minutes = 0;
            seconds = 0;
            milisec = 0;
        }

        let milis = milisec;
        let sec = seconds;
        let min = minutes;
        let hr = hours;

        if(milisec < 10){
            milis = "0" + milisec;
        }

        if(seconds < 10){
            sec = "0" + seconds;
        }

        if(minutes < 10){
            min = "0" + minutes;
        }

        if(hours < 10){
            hr = "0" + hours;
        }

        document.getElementById("milisec").innerHTML = milis;
        document.getElementById("seconds").innerHTML = sec;
        document.getElementById("minutes").innerHTML = min;
        document.getElementById("hours").innerHTML = hr;
        setTimeout(StopWatch ,10);
    }
}