import { displayTime } from './ui.js';
import { startTimer, pauseTimer, resetTimer } from './logic.js';

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