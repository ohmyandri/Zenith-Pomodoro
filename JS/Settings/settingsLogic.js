import { setTimeConfig } from "../Index/logic.js"

export function changeTime(newMinutes){
    //Changing the value for the var at logic.js
    setTimeConfig(0, newMinutes, 0);
}

export function newFocusTime(){
    
}

export function newRestTime(){}