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

function getHumanChoice() {
    let answer = prompt("Select between Rock, Paper or Scissors: ")
    answer = answer.toLocaleUpperCase();
    return answer;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
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
    
        console.log(aftermatch);
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    for(let numGame = 0; numGame < 5; ++numGame ) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore) {
        console.log("It's a tie");
    } else if (humanScore > computerScore) {
        console.log("You win the game, congratulstion!");
    } else {
        console.log("You lose, you will do better next time");
    }
};


playGame();
