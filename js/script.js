const selection = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return selection[Math.floor(Math.random() * selection.length)];
}
console.log(getComputerChoice());
