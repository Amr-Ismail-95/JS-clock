const seconds = document.getElementById("seconds")
const minutes = document.getElementById("minutes")
const hours = document.getElementById("hours")

function setTime(){
    const now = new Date();
    const currentSeconds = now.getSeconds();
    const currentSecondsDeg = ((currentSeconds / 60)*360) + 90
    seconds.style.transform = `rotate(${currentSecondsDeg}deg)`

    const currentMinutes = now.getMinutes();
    const currentMinutesDeg = ((currentMinutes / 60)*360) + 90
    minutes.style.transform = `rotate(${currentMinutesDeg}deg)`

    const currentHours = now.getHours();
    const currentHoursDeg = ((currentHours / 12)*360) + 90
    hours.style.transform = `rotate(${currentHoursDeg}deg)`

}



setInterval(setTime, 1000)

// setInterval(setDate(), 60000)