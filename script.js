let humanScore = 0;
let computerScore = 0;

const games = document.querySelector("#game");

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  const select = ["Rock", "Paper", "Scissors"];
  return select[random];
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
  if(humanScore >= 5 || computerScore >= 5) return;

  if(humanChoice === computerChoice) {
    games.textContent = "Tie";
  } 
  else if (
    (humanChoice === "Rock" && computerChoice === "Scissors")||
    (humanChoice === "Scissors" && computerChoice === "Paper")||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    humanScore++;
    games.textContent = "Human won, Computer lose";
  }
  else if (
    (computerChoice === "Rock" && humanChoice === "Scissors")||
    (computerChoice === "Scissors" && humanChoice === "Paper")||
    (computerChoice === "Paper" && humanChoice === "Rock" )
  ) {
    computerScore++;
    games.textContent = "Computer won, Human lose";
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
