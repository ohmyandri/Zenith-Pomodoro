import {displayTime} from "./ui.js";

let timer = 0;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let timeConfig = {
    h: 0,
    m: 25,
    s: 0
};
let total_time = ((timeConfig.h * 3600) + (timeConfig.m * 60) + timeConfig.s) * 1000;

export function startTimer() {
    //First, we check if it is running
    if (!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 100)
        isRunning = true;
    };
}

export function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let time_left = total_time - elapsedTime;

    let timeToDisplay = formatTime(time_left);

    displayTime(timeToDisplay);
}

export function pauseTimer(){
    isRunning = false;
    clearInterval(timer);
}

export function resetTimer(){
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;

    displayTime(formatTime(total_time));
}

export function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    return {
        h: String(hours).padStart(2, '0'),
        m: String(minutes).padStart(2, '0'),
        s: String(seconds).padStart(2, '0')
    };
}