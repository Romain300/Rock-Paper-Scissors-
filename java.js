// Rock, Paper, Scissors game

function getComputerChoice() {
    let num = Math.floor(Math.random() * 100 + 1);
    let choice = "none";
    if (num <= 33) {
        choice = "ROCK"
    } else if (num > 33 && num <= 66) {
        choice = "PAPER"
    } else {
        choice = "SCISSORS"
    }
    return choice;
}

const outcome = document.querySelector(".outcome");
const huScore = document.querySelector("#humanScore");
const coScore = document.querySelector("#compScore");
const afterM = document.querySelector(".aftermatch");
const choices = document.querySelectorAll(".choice");
const playAgain = document.querySelector("#buttonplay");
    

function playGame() {
    outcome.textContent = "";
    huScore.textContent = 0;
    coScore.textContent = 0;
    afterM.textContent = "";
    let humanScore = huScore.textContent;
    let computerScore = coScore.textContent;
    let nbGame = 0;
    playAgain.style.display = "none";
    choices.forEach((element) => {
        element.disabled = false;
    });
    
    function playRound(humanChoice, computerChoice) {
        let aftermatch;
        if (humanChoice === computerChoice) {
            aftermatch = "It's a tie!"
        } else if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
            aftermatch = "You win! Rock beats Scissors"
            ++humanScore;
        } else if (humanChoice === "PAPER" && computerChoice === "ROCK") {
            aftermatch = "You win! Paper beats Rock"
            ++humanScore;
        } else if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
            aftermatch = "You win! Scissors beats Paper"
            ++humanScore;
        } else if (computerChoice === "ROCK" && humanChoice === "SCISSORS") {
            aftermatch = "You lose! Rock beats Scissors"
            ++computerScore;
        } else if (computerChoice === "PAPER" && humanChoice === "ROCK") {
            aftermatch = "You lose! Paper beats Rock"
            ++computerScore;
        } else if (computerChoice === "SCISSORS" && humanChoice === "PAPER") {
            aftermatch = "You lose! Scissors beats Paper"
            ++computerScore;
        }
    
        afterM.textContent = aftermatch;
        coScore.textContent = computerScore ;
        huScore.textContent = humanScore;
    }
 
    choices.forEach((element) => {
    element.addEventListener("click", () => {
        const humanChoice = element.textContent.toUpperCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        nbGame++;

        if (humanScore === computerScore && nbGame === 5) {
            outcome.textContent = "It's a tie";
            choices.forEach((element) => {
                element.disabled = true;
            });
            playAgain.style.display = "block";
            playAgain.onclick = () => {
                playGame();
            }
    
        } else if (humanScore > computerScore && nbGame === 5) {
            outcome.textContent = "You win the game, congratulstion!";
            choices.forEach((element) => {
                element.disabled = true;
            });
            playAgain.style.display = "block";
            playAgain.onclick = () => {
                playGame();
            }
            
        } else if (humanScore < computerScore && nbGame === 5) {
            outcome.textContent = "You lose, you will do better next time";
            choices.forEach((element) => {
                element.disabled = true;
            });
            playAgain.style.display = "block";
            playAgain.onclick = () => {
                playGame();
            }
            
        }
        
        })
   
    })
   
};

playGame();

