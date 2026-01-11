import {startTimer, pauseTimer, resetTimer, setTimeConfig} from './logic.js';

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('stopTimerBtn');
const resetBtn = document.getElementById('restartTimerBtn');

startBtn.addEventListener('click', startTimer);

pauseBtn.addEventListener('click', pauseTimer);

resetBtn.addEventListener('click', resetTimer);

//On reload, reset the timer display
window.onload = () => {
    resetTimer();
}

const toggle = document.getElementById('pomodoroToggle');
toggle.addEventListener('change', () => {
    if(!toggle.checked){
    let timeConfig = {
        h: 0,
        m: 25,
        s: 0
    }
    setTimeConfig(timeConfig.h, timeConfig.m, timeConfig.s);

    resetTimer();
    }

    else{
    let timeConfig = {
        h: 0,
        m: 5,
        s: 0
    }

        setTimeConfig(timeConfig.h, timeConfig.m, timeConfig.s);
        resetTimer();
    }
});