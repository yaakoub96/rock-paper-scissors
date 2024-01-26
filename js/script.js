const selection = ["rock", "paper", "scissors"];

let computerSelection;
function getComputerChoice() {
  return selection[Math.floor(Math.random() * selection.length)];
}

let result;
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    result = `You Win! ${playerSelection} beat ${computerSelection}`;
  } else if (playerSelection == computerSelection) {
    result = `No Winner "Your selection is ${playerSelection} and Computer selection is ${computerSelection} too"`;
  } else {
    result = `You Lose! ${computerSelection} beat ${playerSelection}`;
  }
  return result;
}
// making a best-of-five game and add score for each player
let playerScore = 0;
let computerScore = 0;

function game() {
  const gameRounds = 5;
  for (let i = 1; i <= gameRounds; i++) {
    playerSelection = prompt(
      `Please select one of the list: "rock, paper, scissors"`
    ).toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Round ${i}`);
    if (result.charAt(4) == "W") {
      console.log(
        `player score ${playerScore++}`,
        `computer score ${computerScore}`
      );
    } else if (result.charAt(4) == "L") {
      console.log(
        `player score ${playerScore}`,
        `computer score ${computerScore++}`
      );
    } else {
      console.log(
        `player score ${playerScore}`,
        `computer score ${computerScore}`
      );
    }
    console.log(playRound(playerSelection, computerSelection), "\n ");
  }
}
game();
function finalScore() {
  console.log(
    "------------------------------------------",
    "\n ",
    `\nThe final player score is: ${playerScore}`,
    `\nThe final computer score is: ${computerScore}`
  );
  if (playerScore > computerScore) {
    console.log("Congratulation you are The Winner");
  } else if (computerScore > playerScore) {
    console.log("You Lost try again");
  } else {
    console.log("No Winner!");
  }
}
finalScore();
