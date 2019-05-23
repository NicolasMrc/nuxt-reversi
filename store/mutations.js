import * as disk from '../enums/diskState'
import * as game from '../enums/gameState'

export default {
  initBoard(state) {
    state.board = Array(...Array(state.boardSize)).map(() =>
      Array(state.boardSize).fill(disk.NONE)
    )
    // TODO init the 4 first disk
    state.game = game.STARTED
  }
}
