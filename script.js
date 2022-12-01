const Game = () => {
    const winningIndexes = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]]
    const playerOne = []
    const playerTwo = []
    let isPlayerOne = true

    const play = (index) => {
        if (isPlayerOne)
            playerOne.push(index)
        else
            playerTwo.push(index)

        isPlayerOne = !isPlayerOne

        checkWin()
    }

    const checkWin = () => {
        winningIndexes.forEach(item => {
            const [one, two, three] = item

            if (playerOne.includes(one) && playerOne.includes(two) && playerOne.includes(three)) {
                setWinner(1)
                return
            }
            if (playerTwo.includes(one) && playerTwo.includes(two) && playerTwo.includes(three)) {
                setWinner(2)
                return
            }
        })
    }

    const setWinner = (winner) => {
        console.log(`The winner is ${winner}`)
        playerOne = []
        playerTwo = []
        isPlayerOne = true
    }
}

