let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

let computerPlay = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection) {
    let choice1 = choices.indexOf(playerSelection);
    let choice2 = choices.indexOf(computerSelection);

    if (choice2 == 0 && choice1 == choices.length - 1) {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (choice1 == 0 && choice2 == choices.length - 1) {
      playerScore++;
      return `You Won!!! ${playerSelection} beats ${computerSelection}`;
    } else if (choice1 < choice2) {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (
      choice1 > choice2 ||
      (choice1 == 0 && choice2 == choices.length - 1)
    ) {
      playerScore++;
      return `You Won!!! ${playerSelection} beats ${computerSelection}`;
    } else return "No one won!! Try again";
  }
};

let game = () => {
  for (let x = 0; x < 5; x++) {
    let playerSelection = null;
    do {
      playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase();
    } while (!playerSelection || !choices.includes(playerSelection));

    let computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);
    console.log("You:", playerSelection, "-", "Computer:", computerSelection);
    console.log(x + 1, round);
  }

  if (playerScore < computerScore) {
    console.log(
      `You lose the game!! the result is: ${playerScore}/${computerScore}`
    );
  } else {
    console.log(
      `You won the game!! the result is: ${playerScore}/${computerScore}`
    );
  }
};

game();
