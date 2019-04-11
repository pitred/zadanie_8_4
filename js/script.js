// Variables
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");
var newGameBtn = document.getElementById("new-game");
var outputWinStatus = document.getElementById("output");
var outputPoints = document.getElementById("result");
var outputNrRounds = document.getElementById("rounds-to-win");
var modal = document.querySelector('.modal');
var modalBody = document.querySelector('.modal__body');
var won = 0;
var lost = 0;
var conditionToWin;
var progres = [];


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

// function that generates sumary table
function generateTable() {
    var table = `
        <table>
            <thead>
                <tr>
                    <th>Nr</th>
                    <th>Player choice</th>
                    <th>Computer choice</th>
                    <th>Won</th>
                    <th>Lost</th>
                </tr>
            </thead>
            <tbody>`

    progres.forEach(function (item, index) {
        table += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.playerChoice}</td>
                <td>${item.computerChoice}</td>
                <td>${item.won}</td>
                <td>${item.lost}</td>
            </tr>
        `
    })

    table += `
            </tbody>
        </table>
    `
    modalBody.innerHTML += table;
}

// function that ends game
function endOfTheGame(conditionToWin, won, lost) {
    if (conditionToWin === won) {
        modalBody.innerHTML = "<strong>YOU WIN ENTIRE GAME</strong><br><br><a href='#' class='close'>x</a>";
        modal.classList.add('show');
        generateTable();
    } else if (conditionToWin === lost) {
        modalBody.innerHTML = "<strong>COMPUTER WIN ENTIRE GAME</strong><br><br><a href='#' class='close'>x</a>";
        modal.classList.add('show');
        generateTable();
    }
}

// function that blocks butons
function blockBtn() {
    if (conditionToWin === won || conditionToWin === lost) {
        newGameBtn.disabled = false;
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
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
    progres = [];
    conditionToWin = '';
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

    progres.push({
        playerChoice,
        computerChoice,
        won,
        lost
    });

    outputPoints.innerHTML = "PLAYER &nbsp" + won + " - " + lost + "&nbsp COMPUTER";
    endOfTheGame(conditionToWin, won, lost);
}

// react at the press of a button new game
newGameBtn.addEventListener("click", function () {
    newGame();
    askForRounds();
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

// function that hide modal
var hideModal = function (e) {
    e.preventDefault();
    document.querySelector('.modal').classList.remove('show');
};
var closeButtons = document.querySelectorAll('.modal .close');
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', hideModal);
}
document.querySelector('.modal').addEventListener('click', hideModal);