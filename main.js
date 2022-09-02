let choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "computer wins";
    } else if (computerSelection == "scissors") {
      return "player wins";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return "computer wins";
    } else if (computerSelection == "rock") {
      return "player wins";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "computer wins";
    } else if (computerSelection == "paper") {
      return "player wins";
    }
  }
}

function game(playerSelection, computerSelection) {
  if (playRound(playerSelection, computerSelection) == "player wins") {
    playerCount++;
  } else if (playRound(playerSelection, computerSelection) == "computer wins") {
    computerCount++;
  }
  return `player (${playerSelection}) score ${playerCount} computer (${computerSelection}) 
        score ${computerCount}`;
}

const playerSelection = prompt("Enter your selection: ");
let playerCount = 0;
let computerCount = 0;

for (let i = 0; i < 5; i++) {
  console.log(game(playerSelection, getComputerChoice(choices)));
}

if (playerCount > computerCount) {
  console.log("you win!");
} else if (playerCount < computerCount) {
  console.log("you lose!");
} else {
  console.log("tie");
}
