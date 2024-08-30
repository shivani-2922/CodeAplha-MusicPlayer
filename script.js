const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const songs = [
    { title: 'Song 1', artist: 'Artist 1', src: 'vid.mp3', bg: 'url(1.jpg)' },
    { title: 'Song 2', artist: 'Artist 2', src: 'vid2.mp3', bg: 'url(2.jpg)' },
    { title: 'Song 3', artist: 'Artist 3', src: 'vid3.mp3', bg: 'url(3.jpg)' },
];

let songIndex = 0;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    document.body.style.backgroundImage = song.bg;
}

function playSong() {
    audio.play();
    playBtn.textContent = 'Pause';
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = 'Play';
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

playBtn.addEventListener('click', () => {
    const isPlaying = audio.paused;
    if (isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Load the first song initially
loadSong(songs[songIndex]);
