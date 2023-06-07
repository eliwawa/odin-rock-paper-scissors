const output = document.querySelector("#output");

let playerScore = 0;
let computerScore = 0;

const startButton = document.querySelector('#start');
startButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    output.textContent = 'Select a move'
});

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch(choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            reportScore('It\'s a tie!');
        }
        if (computerSelection == 'paper') {
            computerScore++;
            reportScore('You lose! Rock loses to paper.');
        }
        if (computerSelection == 'scissors') {
            playerScore++;
            reportScore('You win! Rock beats scissors.');
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            reportScore('It\'s a tie!');
        }
        if (computerSelection == 'scissors') {
            computerScore++;
            reportScore('You lose! Paper loses to scissors.');
        }
        if (computerSelection == 'rock') {
            playerScore++;
            reportScore('You win! Paper beats rock.');
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            reportScore('It\'s a tie!');
        }
        if (computerSelection == 'rock') {
            computerScore++;
            reportScore('You lose! Scissors loses to rock.');
        }
        if (computerSelection == 'paper') {
            playerScore++;
            reportScore('You win! Scissors beats paper.');
        }
    }
}

function game() {
    if (playerScore > computerScore && playerScore > 4) {
        output.innerHTML = output.textContent + "<br>" + 'Congrats! You win the series!';
    } else if (computerScore > playerScore && computerScore > 4) {
        output.innerHTML = output.textContent + "<br>" + 'The computer wins this series, better luck next time!';
    }
}

function reportScore(roundOutcome) {
    if (playerScore > computerScore) {
        output.textContent = `${roundOutcome} The series score is ${playerScore} to ${computerScore} in your favor`;
    } else if (playerScore < computerScore) {
        output.textContent = `${roundOutcome} The series score is ${computerScore} to ${playerScore} in the computer's favor`;
    } else {
        output.textContent = `${roundOutcome} The series score is tied at ${playerScore} to ${computerScore}`;
    }
    game();
    return
}