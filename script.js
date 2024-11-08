let humanScore = 0;
let computerScore = 0;
let playerSelection = '';

const games = document.querySelector("#game");

const computerSelection = getComputerChoice();

const humanSelection = getHumanChoice();

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
      case 0:
    return "Rock";
      case 1:
    return "Paper";
      case 2: 
    return "Scissors";
  }
}

function getHumanChoice(){
  const btn1 = document.querySelector("#btn1");
  btn1.onclick = () => {
    playRound("Rock", getComputerChoice());
  };
  const btn2 = document.querySelector("#btn2");
  btn2.onclick = () => {
    playRound("Paper", getComputerChoice());
  };
  const btn3 = document.querySelector("#btn3");
  btn3.onclick = () => {
    playRound("Scissors", getComputerChoice());
  };
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
    games.textContent = "Tie";
  } 
  else if (humanChoice == "Scissors") {
    if (computerChoice == "Rock") {
      games.textContent = "Computer Won, Human Lose";
      computerScore++;
    } else {
      games.textContent = "Human won, Computer Lose";
      humanScore++;
    }
  }
  else if (humanChoice == "Paper") {
    if (computerChoice == "Scissors") {
      games.textContent = "Computer won, Human Lose";
      computerScore++;
    } else {
      games.textContent = "Human won, Computer lose" ;
      humanScore++;
    }
  }
  else if (humanChoice == "Rock") {
    if (computerChoice == "Paper") {
      games.textContent = "Computer won, Human lose";
      computerScore++;
    } else {
      games.textContent = "Human won, Computer lose";
      humanScore++;
    } 
  }
winner();
}


function winner() {
  if (humanScore >= 5) 
    games.textContent = "HUMANITY WON AGAINST A.I YESSSSSSS";
  if (computerScore >= 5) 
    games.textContent = "A.I WON AGAINST THE HUMANITY NOOOOOOO";
}

function reset() {
  humanScore = 0;
  computerScore = 0;
  games.textContent = "FIGHT FOR HUMANITY!";
}
