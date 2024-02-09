let computerSelection;
let playerSelection;

const selection = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return selection[Math.floor(Math.random() * selection.length)];
}

let playerScore = 0;
let computerScore = 0;
let round = 1;
let container = document.querySelector("div");
let result;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (playerSelection, computerSelection) => {
    if (playerScore === 5 || computerScore === 5) {
      playerScore = 0;
      computerScore = 0;
      round = 1;
      container.textContent = "";
    }

    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    let par = document.createElement("p");

    if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")
    ) {
      result = `You Win! ${playerSelection} beat ${computerSelection}`;
    } else if (playerSelection == computerSelection) {
      result = `No Winner "Your selection is ${playerSelection} 
              and Computer selection is ${computerSelection} too"`;
    } else {
      result = `You Lose! ${computerSelection} beat ${playerSelection}`;
    }

    if (result.charAt(4) == "W") {
      par.textContent = `Round ${round++}: ${result} /
      player score = ${++playerScore} / 
      computer score = ${computerScore}`;
    } else if (result.charAt(4) == "L") {
      par.textContent = `Round ${round++}: ${result} /
      player score = ${playerScore} / 
      computer score = ${++computerScore}`;
    } else {
      par.textContent = `Round ${round++}: ${result} /
          player score = ${playerScore} /
          computer score = ${computerScore}`;
    }

    container.appendChild(par);

    if (playerScore === 5 || computerScore === 5) {
      return displayTheWinner();
    }
  });
});

function displayTheWinner() {
  let winner = document.createElement("p");
  winner.style.cssText =
    "color: red; background-color: yellow; display: inline-block;";
  playerScore === 5
    ? (winner.textContent = "Congratulation You win!")
    : (winner.textContent = "You Lost!, try again");
  container.appendChild(winner);
}
