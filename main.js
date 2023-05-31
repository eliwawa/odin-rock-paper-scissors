document.addEventListener('DOMContentLoaded', () => {
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
            return "It's a tie!";
        }
        if (computerSelection == 'paper') {
            return "You lose! Rock loses to paper.";
        }
        if (computerSelection == 'scissors') {
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return "It's a tie!";
        }
        if (computerSelection == 'scissors') {
            return "You lose! Paper loses to scissors.";
        }
        if (computerSelection == 'rock') {
            return "You win! Paper beats rock.";
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            return "It's a tie!";
        }
        if (computerSelection == 'rock') {
            return "You lose! Scissors loses to rock.";
        }
        if (computerSelection == 'paper') {
            return "You win! Scissors beats paper.";
        }
    } else {
        return "Please enter either rock, paper, or scissors."
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = prompt("Choose, rock, paper, or scissors");
        const roundOutcome = playRound(playerSelection, getComputerChoice());
        if (roundOutcome.substring(0, roundOutcome.indexOf('!')) == "You win") {
            playerScore++;
        } else if (roundOutcome.substring(0, roundOutcome.indexOf('!')) == "You lose") {
            computerScore++;
        }

        if (playerScore > computerScore) {
            alert(`${roundOutcome} The series score is ${playerScore} to ${computerScore} in your favor`);
        } else if (playerScore < computerScore) {
            alert(`${roundOutcome} The series score is ${computerScore} to ${playerScore} in the computer's favor`);
        } else {
            alert(`${roundOutcome} The series score is tied at ${playerScore} to ${computerScore}`);
        }
    }
    if (playerScore > computerScore) {
        alert("Congrats! You win the series!")
    } else {
        alert("The computer wins this series, better luck next time!")
    }
}

})