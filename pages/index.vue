<template>
  <v-layout justify-center align-center mt5 row wrap>
    <v-flex xs12>
      <div class="text-xs-center">
        <h1 class="display-2">Reversi game made with Nuxt</h1>
      </div>
    </v-flex>
    <v-flex xs12 lg8>
      <board />
    </v-flex>
  </v-layout>
</template>

<script>
import Board from '../components/Board'
export default {
  components: { Board }
}
</script>
