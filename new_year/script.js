const newYear = "1 jan 2024";

function countdown () {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalseconds = (newYearDate - currentDate)/1000;
    
    const days = Math.floor(totalseconds / 3600 / 24);
    const hour = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const second = Math.floor(totalseconds) % 60;

    document.getElementById('days').innerHTML = days;
    document.getElementById('hour').innerHTML = timeFormat(hour);        
    document.getElementById('minutes').innerHTML = timeFormat(minutes);    
    document.getElementById('second').innerHTML = timeFormat(second);   


}

function timeFormat (time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000)