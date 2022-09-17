const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function updateClock(){

    const currentDate = new Date();

    const getSecond = currentDate.getSeconds();
    const getMinute = currentDate.getMinutes();
    const getHour = currentDate.getHours();
    
    const secondDeg = (getSecond / 60) *360;
    const minuteDeg = (getMinute / 60) * 360;
    const hourDeg = (getHour / 12) * 360;

    second.style.transform = `rotate(${secondDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`
    
}

setInterval(updateClock, 1000);
