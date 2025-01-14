console.log("lol")

let getComputerChoice = () => {
    let val = Math.random()
    if (val > 0.66) {
        return 'Rock'

    } 
    if (val > 0.33 && val <= 0.66) {
        return 'Paper'

    }
    else {
        return 'Scissors'
    }
    console.log(val)

}
console.log(getComputerChoice());