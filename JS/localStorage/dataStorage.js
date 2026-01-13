const FOCUS_KEY = "focusData"
const REST_KEY = "restData"
//BEHAVIOR KEYS
const SOUND_KEY = "soundData";
const AUTOSTART_KEY = "autoStartData";

const DEFAULT_FOCUS = { h: 0, m: 25, s: 0 };
const DEFAULT_REST = { h: 0, m: 5, s: 0 };

export function saveFocusTime(configObject){
    //Stringify
    const focusTimeString = JSON.stringify(configObject);
    localStorage.setItem(FOCUS_KEY, focusTimeString)
}

export function saveRestTime(configObject){
    //Stringify
    const restTimeString = JSON.stringify(configObject);
    localStorage.setItem(REST_KEY, restTimeString)
}

export function getFocusTime(){
    const focusTimeString = localStorage.getItem(FOCUS_KEY)
    return focusTimeString ? JSON.parse(focusTimeString) : DEFAULT_FOCUS;
}

export function getRestTime(){
    const restTimeString = localStorage.getItem(REST_KEY)
    return restTimeString ? JSON.parse(restTimeString) : DEFAULT_REST;
}

export function saveSoundBehavior(checkboxState){
    //Stringifying the boolean:
    const checkboxStateString = JSON.stringify(checkboxState);
    //Submitting to the local storage:
    localStorage.setItem(SOUND_KEY, checkboxStateString)
}

export function saveAutoStartBehavior(checkboxState){
    //Stringifying the boolean:
    const checkboxStateString = JSON.stringify(checkboxState);
    //Submitting to the local storage:
    localStorage.setItem(AUTOSTART_KEY, checkboxStateString)
}

export function getSoundBehavior(){
    const checkboxSoundStateString = localStorage.getItem(SOUND_KEY);
    return checkboxSoundStateString ? JSON.parse(checkboxSoundStateString) : false;
}

export function getAutoStartBehavior(){
    const checkboxAutoStartStateString = localStorage.getItem(AUTOSTART_KEY);
    return checkboxAutoStartStateString ? JSON.parse(checkboxAutoStartStateString) : false;
}