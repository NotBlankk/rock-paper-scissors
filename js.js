let humanScore = 0
let computerScore = 0

let getComputerChoice = () => {
    let val = Math.random()
    if (val > 0.66) {
        return 'rock'

    } 
    if (val > 0.33 && val <= 0.66) {
        return 'paper'

    }
    else {
        return 'scissors'
    }
    console.log(val)

}
// console.log(getComputerChoice());

let getHumanChoice = () => {
    let val = prompt("Choose Rock, Paper or Scissors")
    return val
}
// console.log(getHumanChoice());

let playRound = (humanChoice, computerChoice) => {
    hc = humanChoice.toLowerCase()
    if (hc == computerChoice) {
        console.log("Tie")
    }
    if (hc == 'rock') {
        if (computerChoice == 'paper') {
            computerScore += 1
            console.log("You lose! Paper beats Rock")
        }
        if ( computerChoice == 'scissors') {
            humanScore += 1
            console.log("You Win! Rock beats Scissors")
        }
    }
    if (hc == 'paper') {
        if (computerChoice == 'rock') {
            humanScore += 1
            console.log("You Win! Paper beats Rock")
        }
        if ( computerChoice == 'scissors') {
            computerScore += 1
            console.log("You lose! Scissors beats Paper")
        }
    }
    if (hc == 'scissors') {
        if (computerChoice == 'paper') {
            humanScore += 1
            console.log("You Win! Scissors beats Paper")
        }
        if ( computerChoice == 'rock') {
            computerScore += 1
            console.log("You lose! Rock beats Scissors")
        }
    }

}
// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();
// playRound(humanChoice, computerChoice);

let playGame = () => {
    let r = 5
    while(r) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        r -= 1

    }
    console.log(humanScore, computerScore)
}
playGame();