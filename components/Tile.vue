<template>
  <div class="tile orange lighten-3 py-2" @click="play()">
    <disk class="orange lighten-4 mx-auto " />
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
      type: disk,
      default: 0
    }
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
