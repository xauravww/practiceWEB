const c3 = new Audio("./assets/mp3-Notes/c3.mp3")
const cSharp3 = new Audio("./assets/mp3-Notes/c-3.mp3")
const d3 = new Audio("./assets/mp3-Notes/d3.mp3")
const dSharp3 = new Audio("./assets/mp3-Notes/d-3.mp3")
const e3 = new Audio("./assets/mp3-Notes/e3.mp3")
const f3 = new Audio("./assets/mp3-Notes/f3.mp3")
const fSharp3 = new Audio("./assets/mp3-Notes/f-3.mp3")
const g3 = new Audio("./assets/mp3-Notes/g3.mp3")
const gSharp3 = new Audio("./assets/mp3-Notes/g-3.mp3")
const a3 = new Audio("./assets/mp3-Notes/a3.mp3")
const aSharp3 = new Audio("./assets/mp3-Notes/a-3.mp3")
const b3 = new Audio("./assets/mp3-Notes/b3.mp3")

const c4 = new Audio("./assets/mp3-Notes/c4.mp3")
const cSharp4 = new Audio("./assets/mp3-Notes/c-4.mp3")
const d4 = new Audio("./assets/mp3-Notes/d4.mp3")
const dSharp4 = new Audio("./assets/mp3-Notes/d-4.mp3")
const e4 = new Audio("./assets/mp3-Notes/e4.mp3")
const f4 = new Audio("./assets/mp3-Notes/f4.mp3")
const fSharp4 = new Audio("./assets/mp3-Notes/f-4.mp3")
const g4 = new Audio("./assets/mp3-Notes/g4.mp3")
const gSharp4 = new Audio("./assets/mp3-Notes/g-4.mp3")
const a4 = new Audio("./assets/mp3-Notes/a4.mp3")
const aSharp4 = new Audio("./assets/mp3-Notes/a-4.mp3")
const b4 = new Audio("./assets/mp3-Notes/b4.mp3")

const NOTES = [
  { note: "CapsLock", frequency: 261.626, active: false, audio: c3 },
  { note: "A", frequency: 277.183, active: false, audio: d3 },
  { note: "S", frequency: 293.665, active: false, audio: e3 },
  { note: "D", frequency: 311.127, active: false, audio: f3 },
  { note: "F", frequency: 329.628, active: false, audio: g3 },
  { note: "G", frequency: 349.228, active: false, audio: a3 },
  { note: "H", frequency: 369.994, active: false, audio: b3 },
  { note: "J", frequency: 391.995, active: false, audio: c4 },
  { note: "K", frequency: 415.305, active: false, audio: d4 },
  { note: "L", frequency: 430.0, active: false, audio: a4 },
  { note: ";", frequency: 460.0, active: false, audio: f4 },
  { note: "'", frequency: 475.0, active: false, audio: g4 },
  { note: "4", frequency: 440.0, active: false, audio: a4 },
  { note: "5", frequency: 440.0, active: false, audio: b4 },

  { note: "Q", frequency: 456.164, active: false, audio: cSharp3 },
  { note: "W", frequency: 466.164, active: false, audio: dSharp3 },
  { note: "E", frequency: 493.883, active: false, audio: fSharp3 },
  { note: "R", frequency: 523.251, active: false, audio: gSharp3 },
  { note: "T", frequency: 554.365, active: false, audio: aSharp3 },
  { note: "Y", frequency: 587.33, active: false, audio: cSharp4 },
  { note: "U", frequency: 622.254, active: false, audio: dSharp4 },
  { note: "I", frequency: 659.255, active: false, audio: fSharp4 },
  { note: "O", frequency: 739.989, active: false, audio: gSharp4 },
  { note: "P", frequency: 830.609, active: false, audio: aSharp4 }
]

const MAX_PLAY_TIME = 2000

var audioContext = new (window.AudioContext || window.webkitAudioContext)()

document.addEventListener("keydown", (e) => {
  if (e.repeat) return
  console.log(e.key)
  const inputKey = e.key != "CapsLock" ? e.key.toUpperCase() : "CapsLock"
  const noteDetail = findNoteDetails(inputKey)

  if (noteDetail == null) return
  noteDetail.active = true

  noteDetail.audio.currentTime = 0

  setTimeout(() => {
    noteDetail.active = false
    playNotes()
  }, MAX_PLAY_TIME)

  playNotes(inputKey)
})

document.addEventListener("keyup", (e) => {
  if (e.repeat) return

  const inputKey = e.key.toUpperCase()
  const noteDetail = findNoteDetails(inputKey)

  if (noteDetail == null) return
  noteDetail.active = false

  playNotes()
})

function playNotes() {
  NOTES.forEach((note) => {
    const keyElement = document.querySelector(`.key[data-note="${note.note}"]`)
    if (keyElement) {
      keyElement.classList.toggle("active", note.active || false)
    }
  })

  NOTES.filter((note) => note.active).forEach((note) => {
    playAudio(note.audio)
  })
}

function findNoteDetails(inputKey) {
  return NOTES.find((note) => note.note == inputKey)
}

function playAudio(audio) {
  audio.play()
}
