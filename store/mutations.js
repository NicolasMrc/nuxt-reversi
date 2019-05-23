import * as disk from '../enums/diskState'
import * as game from '../enums/gameState'

function changeTile(state, x, y, color) {
  state.board[x][y] = color
}

export default {
  initBoard(state) {
    state.board = Array(...Array(state.boardSize)).map(() =>
      Array(state.boardSize).fill(disk.NONE)
    )
    changeTile(state, state.boardSize / 2, state.boardSize / 2, disk.WHITE)
    changeTile(
      state,
      state.boardSize / 2 - 1,
      state.boardSize / 2 - 1,
      disk.WHITE
    )

    changeTile(state, state.boardSize / 2 - 1, state.boardSize / 2, disk.BLACK)
    changeTile(state, state.boardSize / 2, state.boardSize / 2 - 1, disk.BLACK)

    state.game = game.STARTED
  }
}
