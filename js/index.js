
const gameBoard = (() => {
    const _board = new Array(9)

    const logBoard = () => {
        console.log(_board)
    }

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
        logBoard,
        getTile,
        setTile,
        clear
    }
})()

const Player = (sign) => {
    let _sign = sign
    const getSign = () => _sign
    const setSign = (sign) => {
        _sign = sign
    }

    return {
        getSign,
        setSign
    }
}

const gameController = (() => {
    const _player1 = Player('X')
    const _player2 = Player('O')
    let currentPlayer = _player1

    const getPlayer1 = () => _player1
    const getPlayer2 = () => _player2

    const playerStep = (index) => {
        const tile = gameBoard.getTile(index)
        if (tile == undefined) {
            gameBoard.setTile(index, currentPlayer)
            _changeTurn()
        }
    }

    const _changeTurn = () => {
        if (currentPlayer == _player1) {
            currentPlayer = _player2
        } else if (currentPlayer == _player2) {
            currentPlayer = _player1
       } else {
           currentPlayer = undefined
       }
    }

    const _checkForRows = (board) => {
        for (let i = 0; i < 3; i++) {
            let row = []
            for (let j = i * 3; j < i * 3 + 3; j++) {
                row.push(board.getTile(j))
            }

            if (row.every(tile => tile == 'X' ) || row.every(tile => tile == 'O')) {
                return true
            }
        }
        return false
    }

    const _checkForColumns = (board) => {
        for (let i = 0; i < 3; i++) {
            let column = []
            for (let j = 0; j < 3; j++) {
                column.push(board.getTile(i + 3 * j))
            }

            if (column.every(tile => tile == 'X' ) || column.every(tile => tile == 'O')) {
                return true
            }
        }
        return false
    }

    const _checkforDiagonals = (board) => {
        diagonal1 = [board.getTile(0), board.getTile(4), board.getTile(8)]
        diagonal2 = [board.getTile(2), board.getTile(4), board.getTile(6)]
        if (diagonal1.every(tile => tile == 'X' ) || diagonal1.every(tile => tile == 'O')) {
            return true
        } else if (diagonal2.every(tile => tile == 'X' ) || diagonal2.every(tile => tile == 'O')) {
            return true
        }
        return false
    }

     const checkForWin = (board) => {
         if (_checkForRows || _check)
     }

    return {
        getPlayer1,
        getPlayer2,
        playerStep,
        _changeTurn,
        _checkForRows,
        _checkForColumns,
        _checkforDiagonals
    }

})()

const displayController = (() => {
    const htmlBoard = Array.from(document.querySelectorAll('button.tile'));

    const clear = () => {
        htmlTiles.forEach((tile) => {
            const p = tile.childNodes[0]
            p.classList = []
            p.innerHTML = ''
        })
    }

    const _init = (() => {
        for (let i = 0; i < htmlBoard.length; i++) {
            tile = htmlBoard[i];
            tile.addEventListener('click', gameController.playerStep.bind(tile, i))
        }
    })

    return {
        clear,
        _init
    }
})()

displayController._init()

const player3 = Player('X')
gameBoard.setTile(0, player3)
gameBoard.setTile(4, player3)
gameBoard.setTile(7, player3)
gameBoard.logBoard()
console.log(gameController._checkforDiagonals(gameBoard))