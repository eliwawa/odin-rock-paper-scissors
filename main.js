function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
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
            return "It's a tie!"
        }
        if (computerSelection == 'paper') {
            return "You lose! Rock loses to paper"
        }
        if (computerSelection == 'scissors') {
            return "You win! Rock beats scissors"
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return "It's a tie!"
        }
        if (computerSelection == 'scissors') {
            return "You lose! Paper loses to scissors"
        }
        if (computerSelection == 'rock') {
            return "You win! Paper beats rock"
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            return "It's a tie!"
        }
        if (computerSelection == 'rock') {
            return "You lose! Scissors loses to rock"
        }
        if (computerSelection == 'paper') {
            return "You win! Scissors beats paper"
        }
    } else {
        return "Please enter rock, paper, or scissors"
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();