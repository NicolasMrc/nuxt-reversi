import * as disk from '../enums/diskState'
import * as game from '../enums/gameState'

export default () => ({
  board: [],
  boardSize: 8,
  newtTurn: disk.WHITE,
  game: game.STARTED
})
