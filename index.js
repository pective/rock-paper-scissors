console.log("Log from the js file!");

const options = ["rock, paper, scissors"];

function getComputerChoice(){
  const compChoice = options[Math.floor(Math.random() * options.length)];
}
