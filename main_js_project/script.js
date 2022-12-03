let choices = ["rock", "paper", "scissors"];

let computerPlay = () => {
  let randomSelectedChoice =
    choices[Math.floor(Math.random() * choices.length)];
  return randomSelectedChoice;
};

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection) {
    console.log(playerSelection);
    let choice1 = choices.indexOf(playerSelection.toLowerCase());
    let choice2 = choices.indexOf(computerSelection);

    if (choice2 == 0 && choice1 == choices.length - 1)
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    else if (choice1 == 0 && choice2 == choices.length - 1)
      return `You Won!!! ${playerSelection} beats ${computerSelection}`;
    else if (choice1 < choice2)
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    else if (
      choice1 > choice2 ||
      (choice1 == 0 && choice2 == choices.length - 1)
    )
      return `You Won!!! ${playerSelection} beats ${computerSelection}`;
    else return "No one won!! Try again";
  }
};

let game = () => {
  for (let x = 0; x < 5; x++) {
    let playerSelection = null;
    do {
      playerSelection = prompt("Enter Rock, Paper or Scissors");
    } while (
      !playerSelection ||
      !choices.includes(playerSelection.toLowerCase())
    );

    let computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);

    console.log("You:", playerSelection, "-", "Computer:", computerSelection);
    console.log(x + 1, round);
  }
};

game();
