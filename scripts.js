// Playing against the computer
// Start with a functuin that will randomly return either 'rock', 'paper' or 'scissors'.

function computerPlay(play) {
    return play[Math.floor(Math.random()*play.length)];
    
}
let play = ['rock', 'paper', 'scissors']

// Write a function that plays a single game of RPS. 
// The function should take two parameters
// and then return a string that declares the winner of the round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection ==='paper') {
        return 'You Lose! Paper beats Rock'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors'
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Its a draw Rock & Rock'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper'
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Its a draw Paper & Paper'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors'
    } 
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper'
    }
    else {
        return 'Its a draw Scissors & Scissors'
    }
}
const playerSelection = "scissors";
const computerSelection = computerPlay(play);
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));

// rock, paper
// rock, scissors
// rock, rock
// paper, rock
// paper, scissors
// paper, paper
// scissors, rock
// scissors, paper
// scissors, scissors