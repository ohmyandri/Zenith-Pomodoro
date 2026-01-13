const FOCUS_KEY = "focusData"
const REST_KEY = "restData"

const DEFAULT_FOCUS = { h: 0, m: 21, s: 0 };
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