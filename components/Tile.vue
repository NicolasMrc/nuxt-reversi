<template>
  <div class="tile orange lighten-4 py-2" @click="play()">
    <disk
      class="mx-auto"
      :class="{
        'orange lighten-5': tile === 0,
        'indigo lighten-2': tile === 1,
        'teal lighten-2': tile === 2
      }"
    />
  </div>
</template>

<script>
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
    }
  },
  created() {
    // eslint-disable-next-line no-unused-expressions,no-console
    console.log('tile created :: ' + this.tile)
  },
  methods: {
    play() {
      // eslint-disable-next-line no-console
      console.log('clicked on tile :: ' + this.x + ',' + this.y)
    }
  }
}
</script>

<style scoped>
.tile {
  cursor: pointer;
}
</style>
