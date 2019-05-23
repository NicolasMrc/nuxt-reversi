function playerTilesPositions(state, color) {
  const playerTiles = []
  for (let row = 0; row < state.boardSize; row++) {
    for (let column = 0; row < state.boardSize; column++) {
      if (state.board === color) {
        playerTiles.push({ x: row, y: column })
      }
    }
  }
  return playerTiles
}

export default {
  board(state) {
    return state.board
  },
  boardSize(state) {
    return state.boardSize
  },
  possibleMoves(state, color) {
    const playerTiles = playerTilesPositions(state, color)
  }
}
