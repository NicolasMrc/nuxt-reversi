<template>
  <div class="tile orange lighten-4 py-2" @click="play()">
    <disk class="mx-auto" :class="getColor()" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as disk from '../enums/diskState'
import Disk from './Disk'

export default {
  name: 'Tile',
  components: { Disk },
  props: {
    tile: {
      type: Number,
      default: disk.NONE
    },
    y: {
      type: Number,
      default: null
    },
    x: {
      type: Number,
      default: null
    },
    playable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      nextTurn: 'nextTurn'
    })
  },
  methods: {
    play() {
      if (this.playable) {
        // TODO commit this x and y to update board
      }
    },
    getColor() {
      let color = ''
      if (this.tile === disk.NONE && this.playable) {
        color = this.nextTurn === disk.WHITE ? 'indigo ' : 'red '
        color += 'lighten-3 '
      } else if (this.tile === disk.WHITE) {
        color = 'red'
      } else if (this.tile === disk.BLACK) {
        color = 'indigo'
      } else {
        color = 'orange lighten-5'
      }
      return color
    }
  }
}
</script>

<style scoped>
.tile {
  cursor: pointer;
}
</style>
