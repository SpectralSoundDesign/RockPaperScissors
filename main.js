let choices = ["rock", "paper", "scissors"];

const btns = document.querySelectorAll('button');
const body = document.querySelector('body');
const scoreDiv = document.createElement('div');
const p = document.createElement('p');

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

let playerCount = 0;
let computerCount = 0;

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
  let playerSelection = btn.innerText;
  p.textContent = game(playerSelection, getComputerChoice(choices));
  scoreDiv.appendChild(p);
  if (playerCount == 5) {
    p.textContent = 'Player Wins!'
  }
  else if (computerCount == 5) {
    p.textContent = 'Computer Wins!'
  }
  });
});



body.appendChild(scoreDiv);

