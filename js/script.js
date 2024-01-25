const selection = ["rock", "paper", "scissors"];
function game() {
  for (let i = 1; i < 6; i++) {
    function getComputerChoice() {
      return selection[Math.floor(Math.random() * selection.length)];
    }
    console.log("Computer choise is : ", getComputerChoice());

    const playerSelection = prompt(
      `please select one "rock , paper, scissors"`
    ).toLowerCase();
    console.log("Player selection is:", playerSelection);

    function playRound(playerSelection, computerSelection) {
      if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("You Win! rock beasts scissors");
      } else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("You Lose! paper beat rock");
      } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("You Win! paper beat rock");
      } else if (
        playerSelection == "paper" &&
        computerSelection == "scissors"
      ) {
        alert("You Lose! scissors beat paper");
      } else if (
        playerSelection == "scissors" &&
        computerSelection == "paper"
      ) {
        alert("You Win! scissors beat paper");
      } else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert("You Lose! rock beat scissors");
      } else if (playerSelection == computerSelection) {
        alert("You are equals");
      } else if (playerSelection != selection) {
        alert("you picked wrong selection");
      }
    }

    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
