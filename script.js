// Simulate indicator states and interactions
document.addEventListener('DOMContentLoaded', () => {
    const alarmLight = document.getElementById('alarm-light');
    const faultLight = document.getElementById('fault-light');
    const normalLight = document.getElementById('normal-light');
    const pagerMessage = document.getElementById('pager-message');
    const microphone = document.getElementById('microphone');
    const keyMode = document.getElementById('key-mode');

    // Buttons
    const silenceButton = document.getElementById('silence');
    const resetButton = document.getElementById('reset');
    const evacuateButton = document.getElementById('evacuate');

    // Initial State
    alarmLight.style.background = 'red';
    normalLight.style.background = '#555';

    // Microphone Action
    microphone.addEventListener('click', () => {
        console.log("Announcement made!");
        alert("Microphone: Attention! Evacuate the building!");
    });

    // Key Switch
    keyMode.addEventListener('change', (e) => {
        const mode = e.target.value;
        console.log(`Key mode changed to: ${mode}`);
    });

    // Silence Alarm
    silenceButton.addEventListener('click', () => {
        alarmLight.style.background = '#555';
        console.log("Alarm silenced.");
    });

    // Reset System
    resetButton.addEventListener('click', () => {
        alarmLight.style.background = 'red';
        pagerMessage.textContent = "Zone 1: Kitchen Fire";
        console.log("System reset.");
    });

    // Evacuate
    evacuateButton.addEventListener('click', () => {
        alert("Evacuation activated!");
        console.log("Evacuation in progress.");
    });
});
