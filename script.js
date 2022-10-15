//querySelector: method returns all elements that matches a CSS selector
const image = document.querySelector("img");
//getElementById:method returns an element with a specified value
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");


//Arrey for Music
const songs = [
  {
    name: "Iran-e-Man",
    displayName: "Iran-e-Man",
    artist: "Homayon Shajarian",
  },
  { name: "eyesDream", displayName: "eyesDream", artist: "Homayon Shajarian" },
  {
    name: "BaManSanama",
    displayName: "BaManSanama",
    artist: "Homayon Shajarian",
  },
  {
    name: "cheAtashha",
    displayName: "cheAtashha",
    artist: "Homayon Shajarian",
  },
];

//check if playing at the first time
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Pause or play Event Listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Update Dom
// we use text.content because we just want to change the value of the title.
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

//current song
let songIndex = 0;
//Previous Song
function prevSong() {
  preIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  console.log(songIndex);
  loadSong(songIndex[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select first Song
loadSong(songs[songIndex]);

//update Progress Bar & time
function updateProgressBar(e) {
  if (isPlaying) {
   //arrey destructuring technic from sreElement 
   const { duration, currentTime } = e.srcElement;
    console.log(duration, currentTime);
   //Update progress bar width
   const progressPercent = (currentTime / duration) * 100;
   progress.style.width = `${progressPercent}%`;

   // calculate progress display for duration
   const durationMinutes = Math.floor(duration /60);
  //  console.log('minutes',durationMinutes);
   let durationSeconds = Math.floor(duration %60);
   if (durationSeconds < 10) {
    durationSeconds = `0${durationSeconds}`;
  }
  // Delay switching duration Element to avoid NaN at the first progress change
  if (durationSeconds) {
    durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
  }
  // Calculate display for currentTime
  const currentMinutes = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);
  if (currentSeconds < 10) {
    currentSeconds = `0${currentSeconds}`;
  }
  currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
}  
}
// set progress Bar 
// e  = pointer event 
function setProgressBar(e) {
  console.log(e); 

//In an event, 'this' refers to the element that received the event. 
  const width = this.clientWidth;
  console.log('width',width);
  const clickX = e.offsetX;
  console.log('clickX', clickX);
  const {duration} = music
  console.log(clickX / width * duration);
// currentTime: sets or returns the current playback position in the audio/video (in Seconds)
  music.currentTime = ((clickX / width) * duration);
}

 


//event listener
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
//timeupdate: fires when the current playback position has changed
music.addEventListener("timeupdate", updateProgressBar);
// ended: fires when the current playlist ended
music.addEventListener('ended', nextSong)
progressContainer.addEventListener('click', setProgressBar);
