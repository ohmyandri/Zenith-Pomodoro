//For the Total Focus Time we will need access to the session data stored in localStorage
import {getSessionHistory} from "../localStorage/dataStorage.js"

//Variables:
let localStorageSessions = getSessionHistory();
let  pastSessionsSection = document.getElementById('pastSessionsContent');
let pastSessionsContent = pastSessionsSection.innerHTML;


//Destructuring
let { focusTime, restTime } = categorizeSessionDuration();

//Getting the Display Number
let focusDisplay = formatTimeHistory(focusTime)
let restDisplay = formatTimeHistory(restTime)

const totalFocusTime = document.getElementById('focusTotalTime');
const totalRestTime = document.getElementById('restTotalTime');

createCards();

//Auto Displayer
totalFocusTime.textContent = focusDisplay;
totalRestTime.textContent = restDisplay;


//Function to format to a readable time
function formatTimeHistory(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    let timeString = '';

    if (hours > 0) timeString += `${hours}hrs `;
    if (minutes > 0) timeString += `${minutes}min `;
    
    // Agregamos segundos si existen, o si la sesión duró literalmente 0
    if (seconds > 0 || timeString === '') {
        timeString += `${seconds}s`;
    }

    return timeString.trim();
}

//Function to get the time cagetorized:
function categorizeSessionDuration(){
    let focusTime = 0, restTime = 0;
    localStorageSessions.forEach(session => {
        session.mode ? restTime += session.duration : focusTime += session.duration;
    });
    return { focusTime, restTime };
}

//Function to display last sessions
function createCards(){
    for (let i = localStorageSessions.length - 1; i >= 0 ; i--) {
        const session = localStorageSessions[i];
        //With the session, we add to the inner HTML
        pastSessionsContent +=  `
            <div class="pastSessionCard">
                <div class="leftSection">
                    <p>${formatSessionDate(session.date)}</p>
                    <h4 class="sessionDuration">${formatTimeHistory(session.duration)}</h4>
                </div>

                <div class="rightSection">
                    <p class="sessionType">${session.mode ? "Rest" : "Focus"}</p>
                </div>
            </div>
        `
    }
    pastSessionsSection.innerHTML = pastSessionsContent;
}

export function formatSessionDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    
    //FORMATING THE TIME
    const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    const timeString = date.toLocaleTimeString('en-US', timeOptions);

    //TIME DIFFERENCE
    const isToday = date.toDateString() === now.toDateString();
    
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    if (isToday) {
        return `Today, ${timeString}`;
    }
    
    else if (isYesterday) {
        return `Yesterday, ${timeString}`;
    }
    
    else {
        //FOR OLDER DATES:
        const dateOptions = { month: 'short', day: 'numeric' };
        return `${date.toLocaleDateString('en-US', dateOptions)}, ${timeString}`;
    }
}