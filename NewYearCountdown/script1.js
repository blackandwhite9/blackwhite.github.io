let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let daysLeft;
let cYear;
let daysPreYear;
let daysinFeb;

var intervals = window.setInterval(function(){
    var cDate = new Date();
    cHour = cDate.getHours();
    cMin = cDate.getMinutes();
    cSec = cDate.getSeconds();
    cDay = cDate.getDate();
    cMonth = cDate.getMonth() + 1;
    cYear = cDate.getFullYear();

    if (cYear % 4 == 0) {
        daysPreYear = 366;
        daysinFeb = 29;
    } else {
        daysPreYear = 365;
        daysinFeb = 28;
    }

    switch (cMonth) {
        case 1:
            daysLeft = daysPreYear;
            break;

        case 2:
            daysLeft = daysPreYear - 31;
            break;

        case 3:
            daysLeft = daysPreYear - (31 + daysinFeb);
            break;

        case 4:
            daysLeft = daysPreYear - (62 + daysinFeb);
            break;

        case 5:
            daysLeft = daysPreYear - (92  + daysinFeb);
            break;

        case 6:
            daysLeft = daysPreYear - (123 + daysinFeb);
            break;

        case 7:
            daysLeft = daysPreYear - (153 + daysinFeb);
            break;

        case 8:
            daysLeft = daysPreYear - (184 + daysinFeb);
            break;

        case 9:
            daysLeft = daysPreYear - (215 + daysinFeb);
            break;

        case 10:
            daysLeft = daysPreYear - (245  + daysinFeb);
            break;

        case 11:
            daysLeft = daysPreYear - (276 + daysinFeb);
            break;

        case 12:
            daysLeft = daysPreYear - (306 + daysinFeb);
            break;
    
    }

    document.getElementById('second').innerHTML = timeFormat(60 - cSec);
    document.getElementById('minutes').innerHTML = timeFormat(60 - cMin);
    document.getElementById('hour').innerHTML = timeFormat(24 - cHour);
    document.getElementById('days').innerHTML = daysLeft - cDay;
    
}, 1000);

function timeFormat(time) {
    return time < 10 ? `0${time}` : time ;
}

const tglbtn = document.querySelector('.toggle_btn')
const dropdownMenu = document.querySelector('.dropdown_menu')
const listProject = document.querySelector('.li_pro')
const dropdownList = document.querySelector('.dd_links')

listProject.addEventListener('click', () => {
    dropdownList.classList.toggle('dd_menu')
});

tglbtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
};

tglbtn.addEventListener('click', () => {
    tglbtn.classList.toggle('active')
});