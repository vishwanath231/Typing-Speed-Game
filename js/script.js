const start = document.querySelector('.start');
const startBtn = document.querySelector('.start Button');
const typingContainer = document.querySelector(".typing__container");

startBtn.addEventListener("click", () => {
    start.classList.add('active');
    typingContainer.classList.add('active')
})
window.addEventListener('load', init);


// Availabel Levels 
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

// To change level
const currentLevel = levels.easy;


// Global
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector(".word_input");
const currentWord = document.querySelector(".current_word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector(".message");
const seconds = document.querySelector(".seconds");


const words = [
    'heat',
    'heavy',
    'herself',
    'himself',
    'history',
    'hospital',
    'house',
    'human',
    'hundred',
    'identify',
    'imagine',
    'impact',
    'important',
    'improve',
    'include',
    'indeed',
    'interest',
    'network',
    'computer',
    'large',
    'small',
    'level',
    'degree',
    'kitchen',
    'life',
    'light',
    'lawyer',
    'like',
    'legal',
    'introduce'
]


// initialize Game

function init() {
    // show number of second in ui
    seconds.innerHTML = currentLevel;
    // load word from array
    showWord(words);
    // start matching on word input
    wordInput.addEventListener('input', startMatch)
    // call every seconds
    setInterval(countdown, 1000);
    // check status
    setInterval(checkStatus, 50);
}

function startMatch() {
    if (matchWord()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words)
        wordInput.value = '';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }

}

// Match currentWord to wordInput
function matchWord() {

    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = `<span style='color:green;'>Correct!!!</span>`;
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}


function showWord(words){
    // Generate random array index
    const randomIndex = Math.floor(Math.random() * words.length)
    // output random word
    currentWord.innerHTML = words[randomIndex];
}

function countdown() {
    // Make sure time is not run out
    if (time > 0) {
        // Decrement
        time--;
    }else if(time === 0 ){
        // Game over
        isPlaying = false;
    }
    // show time
    timeDisplay.innerHTML = time;
}

function checkStatus() {

    if (!isPlaying && time === 0) {
        message.innerHTML = `<span style='color:crimson;'>Game Over</span>`;
        score = -1;
    }
}

