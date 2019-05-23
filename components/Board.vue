<template>
  <v-container>
    <v-layout
      v-for="y in boardSize"
      :key="y"
      row
      wrap
      justify-center
      align-center
    >
      <v-flex v-for="x in boardSize" :key="x" xs1>
        <tile :tile="board[y][x]" class="px2"></tile>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import * as mutations from '../enums/mutations'
import Tile from './Tile'

export default {
  name: 'Board',
  components: { Tile },
  computed: {
    ...mapGetters({
      board: 'board',
      boardSize: 'boardSize'
    })
  },
  created() {
    this.$store.commit(mutations.INIT_BOARD)
  }
}
</script>

<style scoped></style>
