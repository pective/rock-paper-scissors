console.log("Log from the js file!");

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
  const compChoice = Math.floor(Math.random() * options.length)
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
  if(result == "Tie"){
    return"Its a tie!";
  }
  else if(result == "Player"){
    return`You Win! ${playerChoice} beats ${computerChoice}`;
  }
  else{
    return`You lost! ${computerChoice} beats ${playerChoice}`
  }
}

function game(){
  console.log("Welcome to pective's Rock Paper Scissors!");
  for (let i = 0, i < 5, i++) {
    const playerChoice = "rock" 
    const computerChoice = getComputerChoice;
    console.log(playGame(playerChoice, computerChoice)); 
    }
  }
}
