const music = document.querySelector('Audio')
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('prev')
const nextBtn = document.getElementById('prev')


//check if playing at the first time

let isPlaying = false;

//play
function playsong() {
    isPlaying = true;
    music.play();
}

//pause
function pauseSong() {
    isPlaying = false;
    music.pause();
}

