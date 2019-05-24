import * as disk from '../enums/diskState'
import * as game from '../enums/gameState'
import * as AXIS from '../enums/axis'

function changeTile(state, x, y, color) {
  state.board[x][y] = color
}

function getOpositeColor(state, color) {
  if (color === disk.WHITE) {
    return disk.BLACK
  } else {
    return disk.WHITE
  }
}

function switchTiles(state, tileToSwitch) {
  tileToSwitch.forEach(tile => {
    const color = state.board[tile.x][tile.y]
    changeTile(state, tile.x, tile.y, getOpositeColor(state, color))
  })
}

function getNextTile(axis, increment, tile) {
  if (axis === AXIS.X) {
    tile.x = increment ? tile.x + 1 : tile.x - 1
  } else if (axis === AXIS.Y) {
    tile.y = increment ? tile.y + 1 : tile.y - 1
  } else if (axis === AXIS.XY) {
    tile.x = increment ? tile.x + 1 : tile.x - 1
    tile.y = increment ? tile.y + 1 : tile.y - 1
  } else if (axis === AXIS.YX) {
    tile.x = increment ? tile.x + 1 : tile.x - 1
    tile.y = increment ? tile.y - 1 : tile.y + 1
  }
  return tile
}

function findTiles(state, axis, increment, tile) {
  const color = state.nextTurn === disk.WHITE ? disk.BLACK : disk.WHITE
  const tilesToSwitch = []

  while (
    tile.x >= 0 &&
    tile.y >= 0 &&
    tile.x < state.boardSize &&
    tile.y < state.boardSize
  ) {
    const tileToCheck = state.board[tile.x][tile.y]
    if (tileToCheck === color) {
      switchTiles(state, tilesToSwitch)
      break
    } else if (tileToCheck === disk.NONE) {
      break
    } else {
      tilesToSwitch.push({ x: tile.x, y: tile.y })
      tile = getNextTile(axis, increment, tile)
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

    state.whiteCount = 2
    state.blackCount = 2

    state.game = game.STARTED
  },
  switchTurn(state) {
    state.nextTurn = state.nextTurn === disk.WHITE ? disk.BLACK : disk.WHITE
  },
  playDisk(state, tile) {
    changeTile(state, tile.x, tile.y, getOpositeColor(state, state.nextTurn))

    // x and y axis
    findTiles(state, AXIS.X, true, { x: tile.x + 1, y: tile.y })
    findTiles(state, AXIS.X, false, { x: tile.x - 1, y: tile.y })
    findTiles(state, AXIS.Y, true, { x: tile.x, y: tile.y + 1 })
    findTiles(state, AXIS.Y, false, { x: tile.x, y: tile.y - 1 })

    // diagonal axis
    findTiles(state, AXIS.XY, true, { x: tile.x + 1, y: tile.y + 1 })
    findTiles(state, AXIS.XY, false, { x: tile.x - 1, y: tile.y - 1 })
    findTiles(state, AXIS.YX, true, { x: tile.x + 1, y: tile.y - 1 })
    findTiles(state, AXIS.YX, false, { x: tile.x - 1, y: tile.y + 1 })
  },
  updateScore(state) {
    state.whiteCount = state.board.flat(1).filter(t => t === disk.WHITE).length
    state.blackCount = state.board.flat(1).filter(t => t === disk.BLACK).length
  }
}
