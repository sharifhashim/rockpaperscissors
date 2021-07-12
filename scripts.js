let play = ['rock', 'paper', 'scissors']
let score = 0;
let computerScore = 0;
let playerSelection;
let computerSelection = computerPlay(play)

function computerPlay(play) {
    return play[Math.floor(Math.random()*play.length)]
};

    function playRound(playerSelection, computerSelection) {
        let result = " "
        let scores = " "
        computerSelection = computerPlay(play);
        if (playerSelection === 'rock' && computerSelection ==='paper') {
            computerScore+=1;
            result = 'You Lose! Computer Chose Paper. Paper beats Rock ';
            scores = "Player Score: " + score + " || Computer Score: " + computerScore;
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            score+=1;
            result = 'You Win! Computer Chose Scissors. Rock beats Scissors ' 
            scores = "Player Score: " + score + " || Computer Score: " + computerScore;
        }
        else if (playerSelection === 'rock' && computerSelection === 'rock') {
            result = 'Its a draw Rock & Rock ' 
            scores = "Player Score: " + score + " || Computer Score: " + computerScore;
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            score+=1;
            result = 'You Win! Computer Chose Rock. Paper beats Rock ' 
            scores = "Player Score: " + score + " || Computer Score: " + computerScore;
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore+=1;
            result = 'You Lose! Computer Chose Scissors. Scissors beats Paper '
            scores = "Player Score: " + score + " || Computer Score: " + computerScore;
        }
        else if (playerSelection === 'paper' && computerSelection === 'paper') {
            result = 'Its a draw Paper & Paper '
            scores = "Player Score: " + score + " || Computer Score: " + computerScore;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore+=1;
            result = 'You Lose! Computer Chose Rock. Rock beats Scissors '
            scores = "Player Score: " + score + " || Computer Score: " + computerScore;
        } 
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            score+=1;
            result = 'You Win! Computer Chose Paper. Scissors beats Paper ' 
            scores = "Player Score: " + score + " || Computer Score: " + computerScore;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            result = 'Its a draw Scissors & Scissors '
            scores = "Player Score: " + score + " || Computer Score: " + computerScore;
        }
        else {
            result = 'Please Make a Selection'
        }
        const div = document.getElementById('results')
        div.textContent = result 
        const scoreboard = document.getElementById('scoreBoard')
        scoreboard.textContent = scores
        
        if (score == 5) {
            const final = document.getElementById('final')
            final.textContent = "Congrats You Won The Game! Refresh the page to play again"
            disable();
        }
        else if (computerScore == 5) {
            final.textContent = "You Lose, Computer wins! Refresh the page to play again"
            disable();
        }
    }
    
function disable () {
    buttons.forEach(button => {
        button.disabled = true;
    })  
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', e => {
        playerSelection = button.id
        playRound(playerSelection)
    })    
})

