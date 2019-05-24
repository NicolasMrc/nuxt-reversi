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
    <board-info></board-info>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import * as mutations from '../enums/mutations'
import Tile from './Tile'
import BoardInfo from './BoardInfo'

export default {
  name: 'Board',
  components: { BoardInfo, Tile },
  computed: {
    ...mapGetters({
      board: 'board',
      boardSize: 'boardSize',
      possibleMoves: 'possibleMoves'
    })
  },
  created() {
    this.$store.commit(mutations.INIT_BOARD)
  },
  methods: {
    isPlayable(x, y) {
      return this.possibleMoves.find(p => p.x === x && p.y === y) !== undefined
    }
  }
}
</script>

<style scoped></style>
