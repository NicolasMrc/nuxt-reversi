<template>
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
</template>

<script>
import { mapGetters } from 'vuex'
import * as disk from '../enums/diskState'
import * as mutations from '../enums/mutations'

export default {
  name: 'BoardInfo',
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
  methods: {
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
