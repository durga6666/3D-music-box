
let b = document.body;
let radio = document.querySelector("#radio");
let shadow = document.querySelector("#shadow");
let buttonCta = document.querySelector("#button-cta");
let cover = document.querySelector("#cover");
let circles = document.querySelector("#circles");

let a = document.querySelector("#audio");
let son = document.querySelector("#son");
let soff = document.querySelector("#soff");

let radioPlaying = () => {
    radio.classList.toggle("is-radio-active");
    shadow.classList.toggle("is-shadow-active");
    buttonCta.classList.toggle("is-button-active");
    cover.classList.toggle("is-cover-active");
    

    a.loop = true;

    if (a.paused) a.play();
    else {
        a.pause();
        a.currentTime = 0;
    }

    son.classList.toggle("s");
    soff.classList.toggle("s");
};


buttonCta.addEventListener("click", radioPlaying);
soff.addEventListener("click", radioPlaying);
son.addEventListener("click", radioPlaying);

const songs = [
    "./Something-Just-Like-This(PaglaSongs).mp3",
    "./Tu-Hai-Kahan(PaglaSongs).mp3",
    "./[iSongs.info]01-Mass.mp3"
];

let currentSongIndex = 0;

const audio = document.getElementById('audio');
const audioSource = document.getElementById('audioSource');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function playRandomSong() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * songs.length);
    } while (newIndex === currentSongIndex);
    currentSongIndex = newIndex;
    audioSource.src = songs[currentSongIndex];
    audio.load();
    audio.play();
}

prevBtn.addEventListener('click', playRandomSong);
nextBtn.addEventListener('click', playRandomSong);

playRandomSong();


