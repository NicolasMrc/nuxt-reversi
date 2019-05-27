import * as disk from '../enums/diskState'

function getTilesPosition(state, color) {
  const playerTiles = []
  for (let row = 0; row < state.boardSize; row++) {
    for (let column = 0; column < state.boardSize; column++) {
      if (state.board[row][column] === color) {
        playerTiles.push({ x: row, y: column })
      }
    }
  }
  return playerTiles
}

function getEmptySurroundingTiles(state, position) {
  const emptyTiles = []

  if (
    position.y - 1 >= 0 &&
    state.board[position.x][position.y - 1] === disk.NONE
  ) {
    emptyTiles.push({ x: position.x, y: position.y - 1 })
  }
  if (
    position.x - 1 >= 0 &&
    state.board[position.x - 1][position.y] === disk.NONE
  ) {
    emptyTiles.push({ x: position.x - 1, y: position.y })
  }
  if (
    position.y + 1 < state.boardSize &&
    state.board[position.x][position.y + 1] === disk.NONE
  ) {
    emptyTiles.push({ x: position.x, y: position.y + 1 })
  }
  if (
    position.x + 1 < state.boardSize &&
    state.board[position.x + 1][position.y] === disk.NONE
  ) {
    emptyTiles.push({ x: position.x + 1, y: position.y })
  }

  return emptyTiles
}

export default {
  board(state) {
    return state.board
  },
  boardSize(state) {
    return state.boardSize
  },
  nextTurn(state) {
    return state.nextTurn
  },
  whiteCount(state) {
    return state.whiteCount
  },
  blackCount(state) {
    return state.blackCount
  },
  gameFinished(state) {
    const blackTiles = getTilesPosition(state, state.nextTurn)
    const whiteTiles = getTilesPosition(
      state,
      state.nextTurn === disk.WHITE ? disk.BLACK : disk.WHITE
    )
    const tiles = blackTiles.concat(whiteTiles)

    let possibleMoves = 0

    tiles.forEach(tile => {
      possibleMoves += getEmptySurroundingTiles(state, tile).length
    })

    return possibleMoves === 0
  },
  possibleMoves(state) {
    const playerTiles = getTilesPosition(state, state.nextTurn)

    let moves = []

    playerTiles.forEach(tile => {
      moves = moves.concat(getEmptySurroundingTiles(state, tile))
    })

    return moves
  }
}
