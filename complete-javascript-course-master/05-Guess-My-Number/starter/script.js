'use strict';

let secret = 0;
let score = 0;
var highscore = 0;

const init = function () {
    secret = Math.trunc(Math.random() * 20) + 1;
    score = 20;
};

const changeMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const changeNumber = function (number) {
    document.querySelector(".number").textContent = number;
};

const changeScore = function (newScore) {
    document.querySelector(".score").textContent = newScore;
};

const clearGuess = function () {
    document.querySelector('.guess').value = '';
};

const changeBackground = function (color, width) {
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('.number').style.width = width;
};

const game = function () {
    if (score == 0) {
        changeMessage("You lost");
    };

    changeScore(--score);

    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        changeMessage("No number!");
    } else if (guess < secret) {
        changeMessage("Too low!")
    } else if (guess < secret) {
        changeMessage("Too high!")
    } else {
        changeMessage("You win!");
        changeNumber(secret);
        changeBackground('#60b347', '30rem');
    }

    clearGuess();
};

init();

const reset = function () {
    if (score < 20 && score > highscore) {
        document.querySelector(".highscore").textContent = score;
    }

    changeMessage('Start guessing...');
    changeNumber('');
    changeBackground('#000000', '15rem');
    changeScore(0);
    clearGuess();
    init();
};

document.querySelector('.check').addEventListener('click', game);

document.querySelector('.again').addEventListener('click', reset);