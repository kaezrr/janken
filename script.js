let human_score = 0;
let computer_score = 0;
let rounds = 0;

const buttons = document.querySelector(".buttons");
const human_display = document.querySelector("#human_score");
const computer_display = document.querySelector("#computer_score");
const round_display = document.createElement("p");
document.querySelector("body").appendChild(round_display);

function getComputerChoice() {
    const rand = Math.random();
    if (rand <= 0.33)
        return "rock";
    else if (rand <= 0.66)
        return "paper";
    else
        return "scissors";
}

function playRound(human_choice, computer_choice) {
    const arr1 = ["rock", "paper", "scissors"];
    const arr2 = ["scissors", "rock", "paper"];

    if (arr1.indexOf(human_choice) === arr2.indexOf(computer_choice)) {
        round_display.textContent = "You win! " + human_choice + " beats " + computer_choice;
        human_score++;
    } else if (arr2.indexOf(human_choice) === arr1.indexOf(computer_choice)) {
        round_display.textContent = "You lose! " + computer_choice + " beats " + human_choice;
        computer_score++;
    } else {
        round_display.textContent = "Draw!";
    }
}


buttons.addEventListener("click", (event)=> {
    if(rounds >= 5) return;
    switch(event.target.id) {
        case 'rock':
            playRound("rock", getComputerChoice());
            break;
        case 'paper':
            playRound("paper", getComputerChoice());
            break;
        case 'scissors':
            playRound("scissors", getComputerChoice());
            break;
    }
    human_display.textContent = `Your score: ${human_score}`;
    computer_display.textContent = `Computer score: ${computer_score}`;
    rounds++;
    if (rounds >= 5) {
        const conclusion = document.createElement("p");
        document.querySelector("body").appendChild(conclusion);
        if (human_score > computer_score) {
            conclusion.textContent = "You won!";
        } else if (human_score < computer_score) {
            conclusion.textContent = "You lost!";
        } else {
            conclusion.textContent = "Draw!";
        }
    }
});


