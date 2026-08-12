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

let humanScore = 0;
let computerScore = 0;