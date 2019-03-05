//Variables
var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var output = document.getElementById('output');

//function that selects random number from 1 to 3
function randomChoice() {
    var computerChoice = Math.ceil(Math.random() * 3);
    return computerChoice;
}

//function that shows player moves
function playerMove(playerChoice) {
    computerChoice = randomChoice();
    if (computerChoice == 1) return computerChoice = 'ROCK';
    else if (computerChoice == 2) return computerChoice = 'PAPER';
    else return computerChoice = 'SCISSORS';
    playerChoice = playerMove();
}

// -- TO FIX (CONDITION) --
//function that shows output results
function outputResult(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {
        output.innerHTML = '<br>THERE IS A TIE: you played a ' + playerChoice + ', computer played ' + computerChoice;
    } else if (computerChoice == 2) {
        output.innerHTML = '<br>YOU WON: you played a ' + playerChoice + ', computer played ' + computerChoice;
    } else {
        output.innerHTML = '<br>YOU LOST: you played a ' + playerChoice + ', computer played ' + computerChoice;
    }
}

// reaction at the press of a button rock
rockBtn.addEventListener('click', function () {
    playerMove();
    outputResult(computerChoice, 'ROCK');
});

// reaction at the press of a button paper
paperBtn.addEventListener('click', function () {
    playerMove();
    outputResult(computerChoice, 'PAPER');
});

// reaction at the pres s of a button scissors
scissorsBtn.addEventListener('click', function () {
    playerMove();
    outputResult(computerChoice, 'SCISSORS');
});