
function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"]
    return choice[Math.floor(Math.random() * choice.length)];
}

let round = 0;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
            document.getElementById("round").innerHTML = "Round :  " + ++round;
            document.getElementById("pscore").innerHTML = "Player Score :  " + playerScore;
            document.getElementById("cscore").innerHTML = "Computer Score :  " + computerScore;
            document.getElementById("result").innerHTML = `Tie`;
            endGame();
            
        }
    else if (
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock") ) {
            document.getElementById("round").innerHTML = "Round :  " + ++round
            document.getElementById("pscore").innerHTML = "Player Score :  " + playerScore;
            document.getElementById("cscore").innerHTML = "Computer Score :  " + ++computerScore;
            document.getElementById("result").innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
            endGame();
        }
    else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ) {
            document.getElementById("round").innerHTML = "Round :  " + ++round
            document.getElementById("pscore").innerHTML = "Player Score :  " + ++playerScore;
            document.getElementById("cscore").innerHTML = "Computer Score :  " + computerScore;
            document.getElementById("result").innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
            endGame();
        }
}

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.addEventListener('click', () => playRound("Rock"));
paper.addEventListener('click', () => playRound("Paper"));
scissors.addEventListener('click', () => playRound("Scissors"));

function displayWinner() {
    if (playerScore === computerScore) {
        return document.getElementById("result").innerHTML = "It's a tie game!";
    }
    else if (playerScore > computerScore) {
        return document.getElementById("result").innerHTML = "Congratulations! You have won the game!";
    }
    else if (playerScore < computerScore) {
        return document.getElementById("result").innerHTML = "Uh oh. You have lost the game. Better luck next time.";
    }
}

function endGame() {
    if (playerScore === 5 || computerScore === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        restart.style.visibility = "visible";
        displayWinner();
    }
}

function startGame() {
    window.location.reload();
}

let restart = document.getElementById("restart");
restart.addEventListener('click', startGame);
