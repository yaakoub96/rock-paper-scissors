const selection = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return selection[Math.floor(Math.random() * selection.length)];
}
console.log("Computer choise is : ", getComputerChoice());

const playerSelection = prompt(
  `please select one "rock , paper, scissors"`
).toLowerCase();
console.log("Player selection is:", playerSelection);
