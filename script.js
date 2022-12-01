let isPlayerOne = true

const GameBoard = () => {
    const winningIndexes = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]]
    var playerOne = []
    var playerTwo = []

    const play = (index) => {
        if (isPlayerOne)
            playerOne.push(index)
        else
            playerTwo.push(index)

        isPlayerOne = !isPlayerOne

        checkWin()
        Elements().setCurrentPlayer()
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
        checkStaleMate()
    }

    const checkStaleMate = () => {
        if ((playerOne.length === 5 && playerTwo.length === 4) || 
            (playerOne.length === 4 && playerTwo.length === 5)) {
            setWinner(0)
        }
    }

    const setWinner = (winner) => {
        if (winner === 0)
            console.log('Stalemate')
        else
        console.log(`The winner is ${winner}`)
        clearGameBoard()
    }

    const clearGameBoard = () => {
        playerOne = []
        playerTwo = []
        isPlayerOne = true

        Elements().clearGameBoard()
    }

    return { play, clearGameBoard }
}

const Elements = () => {

    const setCurrentPlayer = () => {
        const playerOne = document.querySelector('.playerOne')
        const playerTwo = document.querySelector('.playerTwo')
    
        if (isPlayerOne) {
            playerOne.classList.toggle('selectedPlayer')
            playerTwo.classList.remove('selectedPlayer')
        } else {
            playerTwo.classList.toggle('selectedPlayer')
            playerOne.classList.remove('selectedPlayer')
        }
    }

    const getAllSquares = () => {
        const squares = document.querySelectorAll('.square')

        return squares
    }

    const setSquareClickListener = () => {
        const squares = getAllSquares()
        const gameBoard = GameBoard()

        squares.forEach((square, index) => {
            square.addEventListener('click', e => {
                setSquareContent(square, isPlayerOne)
                gameBoard.play(index)
            })
        })
    }

    const setSquareContent = (square, isPlayerOne) => {
        if (isPlayerOne) 
            square.textContent = 'X'
        else
            square.textContent = 'O'
    }

    const clearGameBoard = () => {
        const squares = getAllSquares()
        squares.forEach(square => {
            square.textContent = ''
        })
    }

    return { setCurrentPlayer, setSquareClickListener, clearGameBoard }
}

Elements().setCurrentPlayer()
Elements().setSquareClickListener()

