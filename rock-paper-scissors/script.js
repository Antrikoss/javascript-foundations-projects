// Get reference to DOM elements
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const humanScorePara = document.querySelector('.human-score');
const computerScorePara = document.querySelector('.computer-score');
let humanScore = 0;
let computerScore = 0;

// Display initial scores
humanScorePara.innerText = `Your score: ${humanScore}`;
computerScorePara.innerText = `Computer score: ${computerScore}`;

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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    // Create the paragraph with the result message
    let para = document.createElement("p");
    if (humanChoice == "rock" && computerChoice == "paper") {
        para.innerText = "You lose! Paper beats rock";
        computerScore++;
    }
    if (humanChoice == "paper" && computerChoice == "paper") {
        para.innerText = "Tie!";
    }
    if (humanChoice == "scissors" && computerChoice == "paper") {
        para.innerText = "You win! Scissors beats paper";
        humanScore++;
    }
    if (humanChoice == "rock" && computerChoice == "rock") {
        para.innerText = "Tie!";
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
        para.innerText = "You win! Paper beats rock";
        humanScore++;
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
        para.innerText = "You lose! Rock beats scissors";
        computerScore++;
    }
    if (humanChoice == "rock" && computerChoice == "scissors") {
        para.innerText = "You win! Rock beats scissors";
        humanScore++;
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
        para.innerText = "You lose! Scissors beats paper";
        computerScore++;
    }
    if (humanChoice == "scissors" && computerChoice == "scissors") {
        para.innerText = "Tie!";
    }
    results.appendChild(para);

    // Update score
    humanScorePara.innerText = `Your score: ${humanScore}`;
    computerScorePara.innerText = `Computer score: ${computerScore}`;

    // Display winner once one player reaches 5 points
    let winMessage = document.createElement('p');
    if (humanScore == 5) {
        winMessage.innerText = 'You win!';
        results.append(winMessage);
    }
    if (computerScore == 5) {
        winMessage.innerText = 'Computer wins!';
        results.append(winMessage);
    }
        
}

function playGame() {
    
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

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.classList[0];
        if (humanScore < 5 && computerScore < 5)
            playRound(playerSelection, getComputerChoice());
    });
});