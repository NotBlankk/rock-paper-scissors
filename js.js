
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
console.log(getComputerChoice());
let getHumanChoice = () => {
    let val = prompt("Choose Rock Paper Scissors")
    return val
}
console.log(getHumanChoice())