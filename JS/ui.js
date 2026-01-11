export function displayTime(timeToDisplay){
    if (timeToDisplay.h >= '01'){
        timerDisplay.textContent = `${timeToDisplay.h}:${timeToDisplay.m}:${timeToDisplay.s}`
    }

    else{
        timerDisplay.textContent = `${timeToDisplay.m}:${timeToDisplay.s}`
    }
}

