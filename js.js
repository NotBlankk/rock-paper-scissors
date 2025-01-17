//=================================
// variable to keep track of scores
let humanScore = 0
let computerScore = 0

//============================================================
//function to randomly choose between rock paper and scissors
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
    

}

//============================================================
//code to calculate the winner of the rock paper scissors game

let playRound = (humanChoice, computerChoice) => {
    console.log(`Your Choice ${humanChoice}, Computer's Choice ${computerChoice}`)
    console.log(`Your Score ${humanScore} Computer's Score ${computerScore}`)
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
//================================
//function to reset the score after someone wins
let resetGame = () => {

    humanScore = 0
    computerScore = 0
}


//================================================
//function to show the winner once the score is 5
let winnerDisplay = () => {
    if (humanScore > computerScore){
        resultDiv.innerText += "\nYou Win"

    } else {
        resultDiv.innerText += "\nYou Loose"

    }
    resultDiv.innerText += "\nGAME OVER"
    resetGame();


}


//========================================================================================================================
// Created Three Buttons for Playing Rock Paper Scissors and Added the feature to play game from clicking the buttons only
let rockBtn = document.createElement("button")
rockBtn.innerText = "ROCK"

let paperBtn = document.createElement("button")
paperBtn.innerText = "PAPER"

let scissorsBtn = document.createElement("button")
scissorsBtn.innerText = "SCISSORS"

rockBtn.addEventListener("click", function(){
    playRound("Rock", getComputerChoice())
    resultDiv.innerText = `Score Your: ${humanScore}  Computer: ${computerScore}`
    if ((humanScore == 5) || (computerScore == 5)){
        winnerDisplay();

    }

})
paperBtn.addEventListener("click", function(){
    playRound("Paper", getComputerChoice())
    resultDiv.innerText = `Score Your: ${humanScore}  Computer: ${computerScore}`
    if ((humanScore == 5) || (computerScore == 5)){
        winnerDisplay();


    }

})
scissorsBtn.addEventListener("click", function(){
    playRound("Scissors", getComputerChoice())
    resultDiv.innerText = `Score Your: ${humanScore}  Computer: ${computerScore}`
    if ((humanScore == 5) || (computerScore == 5)){
        winnerDisplay();

    }

})

document.body.appendChild(scissorsBtn)
document.body.appendChild(paperBtn)
document.body.appendChild(rockBtn)


//====================================================
// Created a div for displaying the score of the game 

let resultDiv = document.createElement("div")
resultDiv.innerText = `Score Your: ${humanScore}  Computer: ${computerScore}`
document.body.appendChild(resultDiv)
