<template>
  <v-layout justify-center align-center mt5 row wrap>
    <v-flex xs12>
      <div class="text-xs-center">
        <h1 class="display-2">Reversi game made with Nuxt</h1>
      </div>
    </v-flex>
    <v-flex xs12>
      <div class="text-xs-center">
        <h2 class="whiteCount red--text text--lighten-4">
          {{ whiteCount }}
        </h2>
        <h2 class="blackCount indigo--text text--lighten-4">
          {{ blackCount }}
        </h2>
      </div>
    </v-flex>
    <v-flex xs12 lg8>
      <board />
    </v-flex>
    <a
      id="github"
      target="_blank"
      href="https://github.com/NicolasMrc/nuxt-reversi"
      class="display-1 grey--text"
    >
      <i class="fab fa-github"></i>
    </a>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Board from '../components/Board'

export default {
  components: { Board },
  computed: {
    ...mapGetters({
      board: 'board',
      nextTurn: 'nextTurn',
      whiteCount: 'whiteCount',
      blackCount: 'blackCount'
    })
  }
}
</script>

<style scoped>
h2.whiteCount {
  position: absolute;
  right: 5vw;
  font-size: 10vw;
}
h2.blackCount {
  position: absolute;
  left: 5vw;
  font-size: 10vw;
}
#github {
  position: absolute;
  bottom: 20px;
  right: 50px;
}
#github:hover {
  color: rgba(0, 0, 0, 0.8) !important;
}
</style>
