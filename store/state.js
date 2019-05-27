import * as disk from '../enums/diskState'
import * as game from '../enums/gameState'

export default () => ({
  board: [],
  boardSize: 8,
  nextTurn: disk.WHITE,
  game: game.STARTED,
  whiteCount: 2,
  blackCount: 2
})
