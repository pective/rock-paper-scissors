console.log("Log from the js file!");

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
  const compChoice = options[Math.floor(Math.random() * options.length)];
  console.log(compChoice);
  return compChoice;
}

function Winner(playerChoice, computerChoice){
  if(playerChoice == computerChoice){
    return "Tie";
  }  
  else if(
    (playerChoice == "rock" && computerChoice == "scissors")||
    (playerChoice == "paper" && computerChoice == "rock")||
    (playerChoice == "scissors" && computerChoice == "paper")
  ){
    return "Player";
  }
  else{
    return "Computer";
  }
}


function playGame(playerChoice, computerChoice) {
  const result = Winner(playerChoice, computerChoice);
  if(result == "Tie!"){
    return"Its a tie!";
  }
  else if(result == "Player"){
    return`You Win! ${playerChoice} beats ${computerChoice}`;
  }
  else{
    return`You lost! ${computerChoice} beats ${playerChoice}`
  }
}

const playerChoice = "rock";
const computerChoice = getComputerChoice();
console.log(playGame(playerChoice, computerChoice));
