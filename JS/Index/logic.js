import {displayTime} from "./ui.js";
import {toggle} from './main.js';    
import {getFocusTime, getRestTime} from '../localStorage/dataStorage.js'

let timer = 0;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

let focusConfig = getFocusTime();

let restConfig = getRestTime();

let total_time = ((focusConfig.h * 3600) + (focusConfig.m * 60) + focusConfig.s) * 1000;

export function setTimeConfig(h, m, s){
    total_time = ((h * 3600) + (m * 60) + s) * 1000;
    resetTimer();
}

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

    if(elapsedTime >= total_time){
        //We alert the user the focus-time has finished
        alert("Time's done!")
        //We send to the contrary page page:
        const toggle = document.getElementById('pomodoroToggle');
        toggle.checked = !toggle.checked;
        //We set the correct toggler:
        togglerStatus();
        resetTimer();
    }

    else{
        let time_left = total_time - elapsedTime;
    
        let timeToDisplay = formatTime(time_left);
    
        displayTime(timeToDisplay);
    }
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

export function togglerStatus(){
    if(!toggle.checked){
        setTimeConfig(focusConfig.h, focusConfig.m, focusConfig.s);

        resetTimer();
    }

    else{
        setTimeConfig(restConfig.h, restConfig.m, restConfig.s);
        resetTimer();
    }
}