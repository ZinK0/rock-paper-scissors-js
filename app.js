// Initial Score for both human and computer
let humanScore = 0;
let computerScore = 0;

// Random choice for computer
function getComputerChoice() {
  let gameMode = ["rock", "paper", "scissor"];
  let computerChoice = Math.floor(Math.random() * gameMode.length + 1) - 1;
  return gameMode[computerChoice];
}

// Take human input move
function getHumanChoice() {
  let humanChoice = prompt("Choose your move => 'rock', 'paper', 'scissor' : ");
  return humanChoice.toLowerCase;
}

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice == 'rock' || ) {

//     }
// }
