function getComputerChoice() {
   const random = Math.floor(Math.random() * 3)
  switch(random) {
    case 0:
      console.log("Rock");
      break;
    case 1:
      console.log("Scissors");
      break;
    case 2:
      console.log("Paper");
      break;
  }
}

console.log(getComputerChoice());
