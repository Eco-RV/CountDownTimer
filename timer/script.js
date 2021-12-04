const day  = document.getElementById('day');
const hour = document.getElementById('hour');
const min  = document.getElementById('min');
const sec  = document.getElementById('sec');

const deploy = "8 jan 2022";

function countdown() {
    const deployDate = new Date(deploy);
    const currentDate = new Date();

    const totseconds = Math.floor(deployDate - currentDate) / 1000;
    const days = Math.floor(totseconds / 3600 / 24);
    const hours = Math.floor(totseconds / 3600) % 24;
    const minutes = Math.floor(totseconds / 60) % 60;
    const seconds = Math.floor(totseconds%60);


    day.innerHTML  = days;
    hour.innerHTML = format(hours);
    min.innerHTML  = format(minutes);
    sec.innerHTML  = format(seconds);
    
    
}

function format(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);