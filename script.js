const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


//Arrey for Music
const songs = [{name: 'Irane-Man-00',displayName:'Iran-e-Man',artist: 'Homayon Shajarian'},
{name: 'shajarian-5',displayName:'BaMan Sanama',artist: 'Homayon Shajarian'},{name: 'shajarian-6',displayName:'your_eyes_dream',artist: 'Homayon Shajarian'}
];







//check if playing at the first time
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Pause or play Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));


// Update Dom
// we use text content because we just want to change the value of the title.
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}





//on Load - Select First Song
loadSong(songs[songIndex]);

//event listener
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
