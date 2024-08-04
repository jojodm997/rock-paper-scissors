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

console.log(getComputerChoice());
