function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    
    switch (num) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            break;
    }
}

function getHumanChoice() {
    const preAnswer = prompt('Enter rock, paper, or scissors: ');
    answer = preAnswer.toLowerCase();
    return answer;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'rock' && computerChoice == 'scissors')
    ) {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. You win!`);
        return 'player';
    } else if (humanChoice == computerChoice) {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. It's a tie!`);
        return 'tie';
    } else {
        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. You lose!`);
        return 'computer';
    }
}

function playGame(playerChoice, computerChoice) {
    
    alert("Welcome to pective's grand Rock Paper Scissors Game!")
    for (let i = 0; i<5; i++) {
        let playerChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        const winner = playRound(playerChoice, computerChoice);

        // console.log(winner);

        if (winner == 'player') {
            humanScore++;
            console.log(`You win round ${(i+1)}`)
        } else if (winner == 'computer') {
            computerScore++;
            console.log(`You lose round ${(i+1)}`)
        } else {
            console.log(`Round ${(i+1)} is a tie!`)
        }
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log('You win the Game!');
    } else {
        console.log('You Lose!!!!');
    }
}

playGame();