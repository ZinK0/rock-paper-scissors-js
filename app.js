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
  let humanChoice = prompt(
    "Choose your move => 'rock', 'paper', 'scissor' : "
  ).toLowerCase;
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" || computerChoice == "rock") {
    console.log("It's a tie. Nobody Win.");
  } else if (humanChoice == "rock" || computerChoice == "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice == "rock" || computerChoice == "scissor") {
    console.log("You Win! Rock beats Scissor");
    humanScore++;
  } else if (humanChoice == "paper" || computerChoice == "paper") {
    console.log("It's a tie. Nobody Win.");
  } else if (humanChoice == "paper" || computerChoice == "scissor") {
    console.log("You Lose! Scissor beats Paper");
    computerScore++;
  } else if (humanChoice == "paper" || computerChoice == "rock") {
    console.log("You Win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice == "scissor" || computerChoice == "rock") {
    console.log("You Lose! Rock beats Scissor");
    computerScore++;
  } else if (humanChoice == "scissor" || computerChoice == "paper") {
    console.log("You Win! Scissor beats Paper");
    humanScore++;
  } else if (humanChoice == "scissor" || computerChoice == "scissor") {
    console.log("It's a tie. Nobody Win.");
  }
}

// playRound(humanChoice, computerChoice);

let gamePlay = 5;

function playGame() {
  console.log("This game will be last 5 rounds... ");
  while (gamePlay > 0) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    gamePlay--;
  }
  if (humanScore > computerScore) {
    console.log("You Win in 5 rounds ... ");
  } else {
    console.log("Computer Win in 5 rounds...");
  }
}

// playGame();
