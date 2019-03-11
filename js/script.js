//Variables
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");
var newGameBtn = document.getElementById("new-game");
var outputWinStatus = document.getElementById("output");
var outputPoints = document.getElementById("result");
var outputNrRounds = document.getElementById("rounds-to-win");
var gameOver = document.getElementById('game-over');
var won = 0;
var lost = 0;
var conditionToWin;


// function that ask for number of rounds
function askForRounds() {
    var condition = prompt("How many winning rounds end the game ?");
    conditionToWin = Number(condition);
    if (isNaN(conditionToWin) || conditionToWin <= 0) {
        alert("Enter NUMBER of rounds !");
    } else {
        outputNrRounds.innerHTML = "ROUNDS TO WIN : " + conditionToWin;
        return conditionToWin;
    }
}

// function that ends game
function endOfTheGame(conditionToWin, won, lost) {
    if (conditionToWin === won) {
        outputNrRounds.innerHTML = "<strong>YOU WIN ENTIRE GAME</strong>";
    } else if (conditionToWin === lost) {
        outputNrRounds.innerHTML = "<strong>COMPUTER WIN ENTIRE GAME</strong>";
    }
}

// function that blocks butons
function blockBtn() {
    if (conditionToWin === won || conditionToWin === lost) {
        newGameBtn.disabled = false;
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        gameOver.innerHTML = 'Game over, please press the new game button !';
    } else {
        newGameBtn.disabled = true;
    }
}

// function that starts new game
function newGame() {
    won = 0;
    lost = 0;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    newGameBtn.addEventListener('click', function () {
        location.reload();
    });
}

// function that selects random number from 1 to 3
function computerMove() {
    var randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 1) return "ROCK";
    else if (randomNumber === 2) return "PAPER";
    else return "SCISSORS";
}

// function that shows player moves
function playerMove(playerChoice) {
    var computerChoice = computerMove();
    outputResult(computerChoice, playerChoice);
    blockBtn();
}

// function that shows output results
function outputResult(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        outputWinStatus.innerHTML = "<br>THERE IS A TIE: you played a " + playerChoice + ", computer played " + computerChoice;
    } else if ((playerChoice === "ROCK" && computerChoice === "SCISSORS") || (playerChoice === "PAPER" && computerChoice === "ROCK") || (playerChoice === "SCISSORS" && computerChoice === "PAPER")) {
        outputWinStatus.innerHTML = "<br>YOU WON: you played a " + playerChoice + ", computer played " + computerChoice;
        won += 1;
    } else {
        outputWinStatus.innerHTML = "<br>YOU LOST: you played a " + playerChoice + ", computer played " + computerChoice;
        lost += 1;
    }
    outputPoints.innerHTML = "PLAYER &nbsp" + won + " - " + lost + "&nbsp COMPUTER";
    endOfTheGame(conditionToWin, won, lost);
}

// react at the press of a button new game
newGameBtn.addEventListener("click", function () {
    askForRounds();
    newGame();
});

// reaction at the press of a button rock
rockBtn.addEventListener("click", function () {
    playerMove("ROCK");
});

// reaction at the press of a button paper
paperBtn.addEventListener("click", function () {
    playerMove("PAPER");
});

// reaction at the pres s of a button scissors
scissorsBtn.addEventListener("click", function () {
    playerMove("SCISSORS");
});