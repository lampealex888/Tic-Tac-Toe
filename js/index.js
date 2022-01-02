
const gameBoard = (() => {
    const _board = new Array(9)

    const getTile = (index) => _board[index]

    const setTile = (index, player) => {
        const htmlBoard = document.querySelector(`#game-board button:nth-child(${index + 1}) p`)
        htmlBoard.textContent = player.getSign()
        _board[index] = player.getSign()
    }

    const clear = () => {
        _board.forEach((element) => element = undefined)
    }
    return {
        getTile,
        setTile,
        clear
    }
})()

const Player = ((sign) => {
    let _sign = sign
    const getSign = () => _sign
    const setSign = (sign) => {
        _sign = sign
    }

    return {
        getSign,
        setSign
    }
})

const gameController = (() => {
    const _humanPlayer = Player('X')
    const _aiPlayer = Player('O')

    const getHumanPlayer = () => _humanPlayer
    const getAiPlayer = () => _aiPlayer
    const playerStep = (index) => {
        const tile = gameBoard.getTile(index)
    }

    return {
        getHumanPlayer,
        getAiPlayer
    }

})

const displayController = (() => {
    const htmlBoard = document.querySelector('#game-board')
    const htmlTiles = Array.from(htmlBoard.querySelectorAll('p'))

    const updateDisplay = () => {
        htmlTiles.forEach((element, index) => {
            if (_board[index] != undefined) element.innerHTML = _board[index]
        })
    }

    const clearDisplay = () => {
        htmlTiles.forEach((element) => {
            element.innerHTML = ''
        })
    }

    const _init = (() => {
        for (let i = 0; i < htmlTiles.length; i++) {
            tile = htmlTiles[i];
            tile.addEventListener('click', gameController.playerStep.bind(tile, i))
        }
    })
    return {
        updateDisplay,
        clearDisplay,
        _init
    }
})()

