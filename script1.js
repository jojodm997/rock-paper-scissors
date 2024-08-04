function getComputerChoice() {
  const stry = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * stry.length);
  return stry[random]
}

console.log(getComputerChoice());
