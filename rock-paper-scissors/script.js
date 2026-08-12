function getComputerChoice() {
    // returns a string: "rock", "paper", "scissors"
    let num = Math.random();
    if(num >= 0 && num <= 0.3333)
        return "rock";
    if(num > 0.3333 && num <= 0.6666)
        return "paper";
    if(num > 0.6666 && num < 1)
        return "scissors";
}

function getHumanChoice() {
    return prompt("Your choice: ");
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats rock");
            computerScore++;
        }
        if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("Tie!");
        }
        if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats paper");
            humanScore++;
        }
        if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("Tie!");
        }
        if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock");
            humanScore++;
        }
        if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats scissors");
            computerScore++;
        }
        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats scissors");
            humanScore++;
        }
        if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper");
            computerScore++;
        }
        if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("Tie!");
        }
    }
    
    for (let i = 0; i < 5; i++) {
        // get computer choice for this round
        let computerSelection = getComputerChoice();

        // get human choice for this round
        let humanSelection = getHumanChoice();

        // play the round
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore)
        return "Human wins";
    else if (humanScore < computerScore)
        return "Computer wins";
    else
        return "Tie";
}

let winner = playGame();
console.log(winner);