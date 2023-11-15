console.log("Log from the js file!");

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
  const compChoice = options[Math.floor(Math.random() * options.length)];
  console.log(getComputerChoice);
  return compChoice;
}

function Winner(playerChoice, computerChoice){
  switch (playerChoice, computerChoice) {
    case playerChoice == computerChoice:
      console.log("Tie!");
      break;
    
    case playerChoice == "rock" && computerChoice == "scissors":
    case playerChoice == "paper" && computerChoice == "rock":
    case playerChoice == "scissors" && computerChoice == "paper":
      return "Player";
      break;
    
     default:
      return "Computer";
      break;
  }
}

function playGame(playerChoice, computerChoice) {
  const result = Winner(playerChoice, computerChoice);
  if(result == "Tie!"){
    return"Its a tie!";
  }
  else if(result == "Player"){
    return`You Win! ${playerChoice} beats {computerChoice}`;
  }
  else{
    return`You lost! ${computerChoice} beats ${playerChoice}`
  }
}

const playerChoice = "rock";
const computerChoice = getComputerChoice();
console.log(playGame(playerChoice, computerChoice));

getComputerChoice()
