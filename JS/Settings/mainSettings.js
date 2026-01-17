import { saveFocusTime, saveRestTime, getFocusTime, getRestTime, saveSoundBehavior, saveAutoStartBehavior, getSoundBehavior, getAutoStartBehavior} from "../localStorage/dataStorage.js";

const focusSlider = document.getElementById('focusSlider');
const restSlider = document.getElementById('restSlider');

const focusTimeUI = document.getElementById('focusTime');
const restTimeUI = document.getElementById('restTime');

const behaviorSoundSlider = document.getElementById('toggleSound');
const behaviorAutoStartSlider = document.getElementById('toggleAutoStart');

//Setting the value of the slider, to be the one from the data storage
focusSlider.value = getFocusTime().m;
//Setting the value of the slider, to be the one from the data storage
restSlider.value = getRestTime().m;

// Set initial display values
focusTimeUI.textContent = `${String(getFocusTime().m).padStart(2, '0')}:00`;
restTimeUI.textContent = `${String(getRestTime().m).padStart(2, '0')}:00`;

//Initial States of the checkbox:
behaviorSoundSlider.checked = getSoundBehavior();
behaviorAutoStartSlider.checked = getAutoStartBehavior();

//SLIDER FOR THE TIME
focusSlider.addEventListener('input', (e) => {
    //We get the value:
    const sliderData = focusSlider.value;
    
    const newConfig = {
        h: 0,
        m: sliderData,
        s: 0
    };
    // Ahora sí, guardamos el objeto completo
    saveFocusTime(newConfig)

    //Changing the value:
    focusTimeUI.textContent = `${String(sliderData).padStart(2, '0')}:00`;
})

restSlider.addEventListener('input', (e) => {
    //We get the value:
    const sliderData = restSlider.value;
    
    const newConfig = {
        h: 0,
        m: sliderData,
        s: 0
    };
    // Ahora sí, guardamos el objeto completo
    saveRestTime(newConfig)

    //Changing the value:
    restTimeUI.textContent = `${String(sliderData).padStart(2, '0')}:00`;
})

//Behavior Listeners
behaviorSoundSlider.addEventListener('change', () => {
    const actualBoolean = behaviorSoundSlider.checked;
    saveSoundBehavior(actualBoolean);
});

behaviorAutoStartSlider.addEventListener('change', () => {
    const actualBoolean = behaviorAutoStartSlider.checked;
    saveAutoStartBehavior(actualBoolean);
});