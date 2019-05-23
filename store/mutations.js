import * as disk from '../enums/diskState'
import * as game from '../enums/gameState'

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

function findTilesToSwitchInRow(state, x, y, color) {
  let tileToSwitch = []
  for (let i = x - 1; i >= 0; i--) {
    if (state.board[i][y] === color) {
      switchTiles(state, tileToSwitch)
      i = -1
    } else if (state.board[i][y] === disk.NONE) {
      tileToSwitch = []
      i = -1
    } else {
      tileToSwitch.push({ x: i, y: y })
    }
  }
  tileToSwitch = []
  for (let i = x + 1; i < state.boardSize; i++) {
    if (state.board[i][y] === color) {
      switchTiles(state, tileToSwitch)
      i = state.boardSize
    } else if (state.board[i][y] === disk.NONE) {
      tileToSwitch = []
      i = state.boardSize
    } else {
      tileToSwitch.push({ x: i, y: y })
    }
  }
}

function findTilesToSwitchInColumn(state, x, y, color) {
  let tileToSwitch = []
  for (let i = y - 1; i >= 0; i--) {
    if (state.board[x][i] === color) {
      switchTiles(state, tileToSwitch)
      i = -1
    } else if (state.board[x][i] === disk.NONE) {
      tileToSwitch = []
      i = -1
    } else {
      tileToSwitch.push({ x: x, y: i })
    }
  }
  tileToSwitch = []
  for (let i = y + 1; i < state.boardSize; i++) {
    if (state.board[x][i] === color) {
      switchTiles(state, tileToSwitch)
      i = state.boardSize
    } else if (state.board[x][i] === disk.NONE) {
      tileToSwitch = []
      i = state.boardSize
    } else {
      tileToSwitch.push({ x: x, y: i })
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
    findTilesToSwitchInRow(state, position.x, position.y, color)
    findTilesToSwitchInColumn(state, position.x, position.y, color)
  }
}
