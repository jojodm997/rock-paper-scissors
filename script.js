let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  switch(random) {
    case 0:
    return "Rock";
      break;
    case 1:
    return "Paper";
      break;
    case 2:
    return "Scissor";
      break;
  }
}

function getHumanChoice(){
  const input = prompt("Choose between Rock Paper Scissor");
  alert(`${input}`);
}

function playRound(humanChoice, computerChoice) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  if(humanChoice === computerChoice) {
    alert("Tie");
  } 
  else if (humanChoice == "scissor") {
    if (computerChoice == "rock") {
      alert("Computer won");
      computerScore++;
    } else {
      alert("Human won");
      humanScore++;
    }
  }
  else if (humanChoice == "paper") {
    if (computerChoice == "scissors") {
      alert("Computer won");
      computerScore++;
    } else {
      alert("Human won");
      humanScore++;
    }
  }
  else if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      alert("Computer won");
      computerScore++;
    } else {
      alert("Human won");
      humanScore++;
    } 
  }
  
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
