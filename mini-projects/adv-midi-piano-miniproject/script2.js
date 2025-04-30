// --- Remove Web Audio API setup ---
/*
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let echoDelayNode;
let echoFeedbackNode;
let masterGainNode;
const sources = {};
*/

// --- Remove Web Audio Node Setup Function ---
/*
function setupAudioNodes() { ... }
*/

// --- Remove Connection Logic ---
/*
function connectAudioElement(noteDetail) { ... }
*/

// Restore Original Audio Object Creation (Keep this)
const c3_audio = new Audio("./assets/mp3-Notes/c3.mp3")
const cSharp3_audio = new Audio("./assets/mp3-Notes/c-3.mp3")
const d3_audio = new Audio("./assets/mp3-Notes/d3.mp3")
const dSharp3_audio = new Audio("./assets/mp3-Notes/d-3.mp3")
const e3_audio = new Audio("./assets/mp3-Notes/e3.mp3")
const f3_audio = new Audio("./assets/mp3-Notes/f3.mp3")
const fSharp3_audio = new Audio("./assets/mp3-Notes/f-3.mp3")
const g3_audio = new Audio("./assets/mp3-Notes/g3.mp3")
const gSharp3_audio = new Audio("./assets/mp3-Notes/g-3.mp3")
const a3_audio = new Audio("./assets/mp3-Notes/a3.mp3")
const aSharp3_audio = new Audio("./assets/mp3-Notes/a-3.mp3")
const b3_audio = new Audio("./assets/mp3-Notes/b3.mp3")
const c4_audio = new Audio("./assets/mp3-Notes/c4.mp3")
const cSharp4_audio = new Audio("./assets/mp3-Notes/c-4.mp3")
const d4_audio = new Audio("./assets/mp3-Notes/d4.mp3")
const dSharp4_audio = new Audio("./assets/mp3-Notes/d-4.mp3")
const e4_audio = new Audio("./assets/mp3-Notes/e4.mp3")
const f4_audio = new Audio("./assets/mp3-Notes/f4.mp3")
const fSharp4_audio = new Audio("./assets/mp3-Notes/f-4.mp3")
const g4_audio = new Audio("./assets/mp3-Notes/g4.mp3")
const gSharp4_audio = new Audio("./assets/mp3-Notes/g-4.mp3")
const a4_audio = new Audio("./assets/mp3-Notes/a4.mp3")
const aSharp4_audio = new Audio("./assets/mp3-Notes/a-4.mp3")
const b4_audio = new Audio("./assets/mp3-Notes/b4.mp3")

// NOTES array remains the same (using 'audio' property)
const NOTES = [
    { note: "CapsLock", keyName: "C3", audio: c3_audio, frequency: 261.626, active: false },
    { note: "Q", keyName: "C3#", audio: cSharp3_audio, frequency: 456.164, active: false },
    { note: "A", keyName: "D3", audio: d3_audio, frequency: 277.183, active: false },
    { note: "W", keyName: "D3#", audio: dSharp3_audio, frequency: 466.164, active: false },
    { note: "S", keyName: "E3", audio: e3_audio, frequency: 293.665, active: false },
    { note: "D", keyName: "F3", audio: f3_audio, frequency: 311.127, active: false },
    { note: "E", keyName: "F3#", audio: fSharp3_audio, frequency: 493.883, active: false },
    { note: "F", keyName: "G3", audio: g3_audio, frequency: 329.628, active: false },
    { note: "R", keyName: "G3#", audio: gSharp3_audio, frequency: 523.251, active: false },
    { note: "G", keyName: "A3", audio: a3_audio, frequency: 349.228, active: false },
    { note: "T", keyName: "A3#", audio: aSharp3_audio, frequency: 554.365, active: false },
    { note: "H", keyName: "B3", audio: b3_audio, frequency: 369.994, active: false },
    { note: "J", keyName: "C4", audio: c4_audio, frequency: 391.995, active: false },
    { note: "Y", keyName: "C4#", audio: cSharp4_audio, frequency: 587.33, active: false },
    { note: "K", keyName: "D4", audio: d4_audio, frequency: 415.305, active: false },
    { note: "U", keyName: "D4#", audio: dSharp4_audio, frequency: 622.254, active: false },
    { note: "L", keyName: "E4", audio: e4_audio, frequency: 430.0, active: false },
    { note: ";", keyName: "F4", audio: f4_audio, frequency: 460.0, active: false },
    { note: "I", keyName: "F4#", audio: fSharp4_audio, frequency: 659.255, active: false },
    { note: "'", keyName: "G4", audio: g4_audio, frequency: 475.0, active: false },
    { note: "O", keyName: "G4#", audio: gSharp4_audio, frequency: 739.989, active: false },
    { note: "4", keyName: "A4", audio: a4_audio, frequency: 440.0, active: false },
    { note: "P", keyName: "A4#", audio: aSharp4_audio, frequency: 830.609, active: false },
    { note: "5", keyName: "B4", audio: b4_audio, frequency: 440.0, active: false },
];

// --- Remove activeSources tracking ---
// let activeSources = {};

// Main function to initialize everything
async function initializePiano() {
    // --- Remove Web Audio Setup Call ---
    // setupAudioNodes();

    setupEventListeners();
    // --- Update Console Log ---
    console.log("Piano initialized. Using direct Audio playback.");
}

function playNoteByKey(keyNote) {
    const noteDetail = findNoteDetails(keyNote);
    if (noteDetail == null) {
        console.log(`No note detail found for key: ${keyNote}`);
        return;
    }

    console.log(`Attempting to play note: ${noteDetail.keyName} (key: ${keyNote})`);

    // --- Simplify Playback to Direct Audio Element ---
    try {
        noteDetail.audio.currentTime = 0; // Reset playback position
        const playPromise = noteDetail.audio.play(); // Play the audio element

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Automatic playback started!
                console.log(`Playback started for ${noteDetail.keyName}`);
            }).catch(error => {
                // Auto-play was prevented
                console.error(`Playback failed for ${noteDetail.keyName}:`, error);
                // Show a message to the user perhaps?
            });
        }
    } catch (error) {
        console.error(`Error during playback attempt for ${noteDetail.keyName}:`, error);
    }


    // Manage visual active state (no change here)
    if (!noteDetail.active) {
        noteDetail.active = true;
        updateKeyVisualState(noteDetail.note, true);
    }

    // Stop visual state after some time (or rely on keyup)
    // Optional: Add a timeout to deactivate the visual state even without keyup
    // setTimeout(() => {
    //     stopNoteByKey(keyNote, false); // Pass flag to not stop audio
    // }, 1500); // Example: 1.5 seconds
}

// Modify stopNoteByKey slightly if using timeout above
function stopNoteByKey(keyNote/*, stopAudio = true*/) {
    const noteDetail = findNoteDetails(keyNote);
    if (noteDetail == null || !noteDetail.active) return;

    noteDetail.active = false;
    updateKeyVisualState(noteDetail.note, false);

    // Optional: If you want keyup to stop the sound immediately:
    /*
    if (stopAudio) {
        noteDetail.audio.pause();
        noteDetail.audio.currentTime = 0;
    }
    */
}

function updateKeyVisualState(noteIdentifier, isActive) {
    const keyElement = document.querySelector(`.key[data-note="${noteIdentifier}"]`);
    if (keyElement) {
        keyElement.classList.toggle("active", isActive);
    }
}

function setupEventListeners() {
    // Keyboard events (no changes needed here)
    document.addEventListener("keydown", (e) => {
        if (e.repeat) return;
        const inputKey = e.key !== "CapsLock" ? e.key.toUpperCase() : "CapsLock";
        const mappedKey = mapSpecialKeys(inputKey);
        playNoteByKey(mappedKey);
    });

    document.addEventListener("keyup", (e) => {
        const inputKey = e.key !== "CapsLock" ? e.key.toUpperCase() : "CapsLock";
         const mappedKey = mapSpecialKeys(inputKey);
        stopNoteByKey(mappedKey);
    });

    // Mouse/Touch events (no changes needed here)
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => {
        const noteIdentifier = key.dataset.note;
        key.addEventListener("mousedown", () => playNoteByKey(noteIdentifier));
        key.addEventListener("mouseup", () => stopNoteByKey(noteIdentifier));
        key.addEventListener("mouseleave", () => stopNoteByKey(noteIdentifier)); // Stop if mouse leaves while pressed

        // Add touch events for mobile
        key.addEventListener("touchstart", (e) => {
             e.preventDefault(); // Prevent default touch behavior (like scrolling)
             playNoteByKey(noteIdentifier)
        });
        key.addEventListener("touchend", () => stopNoteByKey(noteIdentifier));
        key.addEventListener("touchcancel", () => stopNoteByKey(noteIdentifier));
    });

    // --- Config Menu Event Listeners ---
    const configToggleBtn = document.getElementById('config-toggle-btn');
    const configCloseBtn = document.getElementById('config-close-btn');
    const configMenu = document.getElementById('config-menu');
    const toggleKeyTriggers = document.getElementById('toggleKeyTriggers'); // Updated ID
    const pianoElement = document.querySelector('.piano');

    // --- Remove Slider References & Listeners ---
    /*
    const volumeSlider = document.getElementById('volumeSlider');
    const echoDelaySlider = document.getElementById('echoDelaySlider');
    const echoFeedbackSlider = document.getElementById('echoFeedbackSlider');
    */

    // Keep Toggle/Close Listeners
    if (configToggleBtn && configMenu) {
        configToggleBtn.addEventListener('click', () => {
            configMenu.classList.toggle('hidden');
        });
    }
    if (configCloseBtn && configMenu) {
        configCloseBtn.addEventListener('click', () => {
            configMenu.classList.add('hidden');
        });
    }

    // Add Listener for Key Trigger Toggle
    if (toggleKeyTriggers && pianoElement) {
        // Set initial state based on checkbox default
        if (toggleKeyTriggers.checked) {
            pianoElement.classList.add('show-key-triggers'); // Updated class
        } else {
            pianoElement.classList.remove('show-key-triggers'); // Updated class
        }

        // Add change listener
        toggleKeyTriggers.addEventListener('change', () => {
            if (toggleKeyTriggers.checked) {
                pianoElement.classList.add('show-key-triggers'); // Updated class
            } else {
                pianoElement.classList.remove('show-key-triggers'); // Updated class
            }
        });
    }

    // --- Remove Slider Listeners ---
    /*
    if (volumeSlider && masterGainNode) { ... }
    if (echoDelaySlider && echoDelayNode) { ... }
    if (echoFeedbackSlider && echoFeedbackNode) { ... }
    */
}

// mapSpecialKeys remains the same
function mapSpecialKeys(key) {
    switch(key) {
        case ';':
        case ':': // Handle shift + ;
            return ';';
        case '\'': // Escaped single quote
        case '"': // Handle shift + '
            return '\''; // Escaped single quote
        default:
            return key;
    }
}

// findNoteDetails remains the same
function findNoteDetails(inputKey) {
    // Use mapped key for lookup
    return NOTES.find((note) => note.note === inputKey);
}

// Initialize the piano when the script loads
initializePiano();
