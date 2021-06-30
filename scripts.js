// Playing against the computer
// Start with a functuin that will randomly return either 'rock', 'paper' or 'scissors'.

function computerPlay(play) {
    return play[Math.floor(Math.random()*play.length)];
    
}
let play = ['rock', 'paper', 'scissors']
let score = 0;
let computerScore = 0;

// Write a function that plays a single game of RPS. 
// The function should take two parameters
// and then return a string that declares the winner of the round
function game() {
    function playRound(playerSelection, computerSelection) {
        computerSelection = computerPlay(play);
        playerSelection = prompt('Make a selection: Rock, Paper or Scissors').toLowerCase();
        if (playerSelection === 'rock' && computerSelection ==='paper') {
            computerScore+=1;
            return 'You Lose! Paper beats Rock'
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            score+=1;
            return 'You Win! Rock beats Scissors'
        }
        else if (playerSelection === 'rock' && computerSelection === 'rock') {
            return 'Its a draw Rock & Rock'
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            score+=1;
            return 'You Win! Paper beats Rock' 
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore+=1;
            return 'You Lose! Scissors beats Paper'
        }
        else if (playerSelection === 'paper' && computerSelection === 'paper') {
            return 'Its a draw Paper & Paper'
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore+=1;
            return 'You Lose! Rock beats Scissors'
        } 
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            score+=1;
            return 'You Win! Scissors beats Paper'
        }
        else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return 'Its a draw Scissors & Scissors'
        }
        else {
            return 'Please Make a Selection'
        }
    }
    console.log(playRound(playerSelection, computerSelection));
    console.log("userscore " + score);
    console.log("computerscore " +computerScore);
    console.log(playRound(playerSelection, computerSelection));
    console.log("userscore " + score);
    console.log("computerscore " +computerScore);
    console.log(playRound(playerSelection, computerSelection));
    console.log("userscore " + score);
    console.log("computerscore " +computerScore);
    console.log(playRound(playerSelection, computerSelection));
    console.log("userscore " + score);
    console.log("computerscore " +computerScore);
    console.log(playRound(playerSelection, computerSelection));
    console.log("userscore " + score);
    console.log("computerscore " +computerScore);
    if (score > computerScore) {
        console.log("Congrats You Won The Game!")
    }
    else if (score < computerScore) {
        console.log("You Lose, Computer wins!")
    }
    else {
        console.log("Its a Draw, Try Again")
    }
}

let playerSelection;
const computerSelection = computerPlay(play);
game();


// Write a new function called game(). 
// Use the previous function inside of game() to play a 5 round game
// Keep score and report a winner or loser at the end

