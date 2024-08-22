// Random choice for computer

function getComputerChoice() {
  let gameMode = ["rock", "paper", "scissor"];

  let computerChoice = Math.floor(Math.random() * gameMode.length + 1) - 1;

  return gameMode[computerChoice];
}
getComputerChoice();
