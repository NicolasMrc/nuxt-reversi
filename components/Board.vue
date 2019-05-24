<template>
  <v-container v-if="board.length > 0">
    <v-layout
      v-for="(column, y) in boardSize"
      :key="y"
      row
      wrap
      justify-center
      align-center
    >
      <v-flex v-for="(row, x) in boardSize" :key="x" xs1>
        <tile
          :tile="board[x][y]"
          :x="x"
          :y="y"
          class="px2"
          :playable="isPlayable(x, y)"
        ></tile>
      </v-flex>
    </v-layout>
    <v-layout row wrap text-xs-center>
      <v-flex v-if="!gameFinished" xs12 md8 offset-md2>
        <v-alert :color="nextTurn === 1 ? 'indigo' : 'red'" :value="true">
          <span class="white--text">
            it's {{ nextTurn === 1 ? 'Blue' : 'Red' }} turn !
          </span>
        </v-alert>
      </v-flex>
      <v-flex v-if="gameFinished" xs12 md8 offset-md2>
        <v-alert
          :color="whiteTilesNumber > blackTilesNumber ? 'red' : 'indigo'"
          :value="true"
        >
          <span v-if="whiteTilesNumber > blackTilesNumber" class="white--text">
            Red won !
          </span>
          <span
            v-else-if="whiteTilesNumber < blackTilesNumber"
            class="white--text"
          >
            Blue won !
          </span>
          <span v-else class="white--text">
            Tie !
          </span>
        </v-alert>
      </v-flex>
      <v-flex v-if="gameFinished" xs12>
        <v-btn class="white--text" color="green" @click="reset">
          New Game
        </v-btn>
      </v-flex>
      <v-flex v-else-if="possibleMoves.length === 0" xs12>
        <v-btn
          class="white--text"
          :color="nextTurn === 1 ? 'indigo' : 'red'"
          @click="pass"
        >
          Pass Turn
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import * as disk from '../enums/diskState'
import * as mutations from '../enums/mutations'
import Tile from './Tile'

export default {
  name: 'Board',
  components: { Tile },
  computed: {
    ...mapGetters({
      board: 'board',
      boardSize: 'boardSize',
      nextTurn: 'nextTurn',
      possibleMoves: 'possibleMoves',
      gameFinished: 'gameFinished'
    }),
    whiteTilesNumber() {
      return this.board.flat(1).filter(t => t === disk.WHITE).length
    },
    blackTilesNumber() {
      return this.board.flat(1).filter(t => t === disk.BLACK).length
    }
  },
  created() {
    this.$store.commit(mutations.INIT_BOARD)
  },
  methods: {
    isPlayable(x, y) {
      return this.possibleMoves.find(p => p.x === x && p.y === y) !== undefined
    },
    pass() {
      this.$store.commit(mutations.SWITCH_TURN)
    },
    reset() {
      this.$store.commit(mutations.INIT_BOARD)
    }
  }
}
</script>

<style scoped></style>
