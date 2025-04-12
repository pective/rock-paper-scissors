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

function getHumanChoice(button) {
    return button.textContent.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

const results = document.getElementById('results')
const res = document.createElement('p');
function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice == 'scissors' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'rock' && computerChoice == 'scissors')
    ) {
        // console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}. You win!`);
        res.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}. You win!`;
        results.appendChild(res);
        return 'player';
    } else if (humanChoice == computerChoice) {
        res.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}. It's a tie!`;
        results.appendChild(res);
        return 'tie';
    } else {
        res.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice}. You lose!`;
        results.appendChild(res);
        return 'computer';
    }
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(getHumanChoice(button), getComputerChoice());
    });
});
