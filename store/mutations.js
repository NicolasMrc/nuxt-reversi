import * as disk from '../enums/diskState'
import * as game from '../enums/gameState'
import * as AXIS from '../enums/axis'

function changeTile(state, x, y, color) {
  state.board[x][y] = color
}

// eslint-disable-next-line no-unused-vars
function getOpositeColor(color) {
  if (color === disk.WHITE) {
    return disk.BLACK
  } else {
    return disk.WHITE
  }
}

function switchTiles(state, tileToSwitch) {
  tileToSwitch.forEach(tile => {
    const color = state.board[tile.x][tile.y]
    state.board[tile.x][tile.y] = getOpositeColor(color)
  })
}

function findTiles(state, axis, increment, origin) {
  const color = state.nextTurn === disk.WHITE ? disk.BLACK : disk.WHITE
  const tilesToSwitch = []
  let startingPoint = 0

  if (axis === AXIS.X) {
    startingPoint = increment ? origin.x + 1 : origin.x - 1
  } else {
    startingPoint = increment ? origin.y + 1 : origin.y - 1
  }

  for (
    let i = startingPoint;
    increment ? i < state.boardSize : i >= 0;
    increment ? i++ : i--
  ) {
    if (i < 0 || i >= state.boardSize) {
      break
    }
    const tileToCheck =
      axis === AXIS.X ? state.board[i][origin.y] : state.board[origin.x][i]
    if (tileToCheck === color) {
      switchTiles(state, tilesToSwitch)
      break
    } else if (tileToCheck === disk.NONE) {
      break
    } else {
      const tile =
        axis === AXIS.X ? { x: i, y: origin.y } : { x: origin.x, y: i }
      tilesToSwitch.push(tile)
    }
  }
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
  },
  switchTurn(state) {
    state.nextTurn = state.nextTurn === disk.WHITE ? disk.BLACK : disk.WHITE
  },
  playDisk(state, position) {
    const color = state.nextTurn === disk.WHITE ? disk.BLACK : disk.WHITE
    state.board[position.x][position.y] = color

    findTiles(state, AXIS.X, true, position)
    findTiles(state, AXIS.X, false, position)
    findTiles(state, AXIS.Y, true, position)
    findTiles(state, AXIS.Y, false, position)
  }
}
