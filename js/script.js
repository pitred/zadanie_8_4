//Variables
var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var output = document.getElementById('output');

//function that selects random number from 1 to 3
function computerMove() {
    var randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber === 1) return 'ROCK';
    else if (randomNumber === 2) return 'PAPER';
    else return 'SCISSORS';
}

//function that shows player moves
function playerMove(playerChoice) {
    var computerChoice = computerMove();
    outputResult(computerChoice, playerChoice);
}

//function that shows output results
function outputResult(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        output.innerHTML = '<br>THERE IS A TIE: you played a ' + playerChoice + ', computer played ' + computerChoice;
    } else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') || (playerChoice === 'PAPER' && computerChoice === 'ROCK') || (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')) {
        output.innerHTML = '<br>YOU WON: you played a ' + playerChoice + ', computer played ' + computerChoice;
    } else {
        output.innerHTML = '<br>YOU LOST: you played a ' + playerChoice + ', computer played ' + computerChoice;
    }
}

// reaction at the press of a button rock
rockBtn.addEventListener('click', function () {
    playerMove('ROCK');
});

// reaction at the press of a button paper
paperBtn.addEventListener('click', function () {
    playerMove('PAPER');
});

// reaction at the pres s of a button scissors
scissorsBtn.addEventListener('click', function () {
    playerMove('SCISSORS');
});