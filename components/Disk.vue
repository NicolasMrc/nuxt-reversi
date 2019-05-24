<template>
  <div
    class="disk"
    :class="{
      'flip-horizontal-bottom': color === 1,
      'flip-horizontal-top': color === 2
    }"
    :style="{
      animationDelay: color === 0 ? Math.random() * Math.floor(1) + 's' : 0
    }"
  ></div>
</template>

<script>
import * as disk from '../enums/diskState'

export default {
  name: 'Disk',
  props: {
    color: {
      type: Number,
      default: disk.NONE
    }
  }
}
</script>

<style scoped>
.disk {
  position: relative;
  width: 80%;
  padding-bottom: 80%;
  border-radius: 50%;
  transition: all 0.3s;
}
.hint {
  animation: NAME-YOUR-ANIMATION 1s infinite ease-in-out;
}

@keyframes NAME-YOUR-ANIMATION {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.flip-horizontal-bottom {
  -webkit-animation: flip-horizontal-bottom 0.4s
    cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-delay: 0ms !important;
}

.flip-horizontal-top {
  -webkit-animation: flip-horizontal-top 0.4s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: flip-horizontal-top 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;
  animation-delay: 0ms !important;
}

@-webkit-keyframes flip-horizontal-bottom {
  0% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(-180deg);
    transform: rotateX(-180deg);
  }
}
@keyframes flip-horizontal-bottom {
  0% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(-180deg);
    transform: rotateX(-180deg);
  }
}

@-webkit-keyframes flip-horizontal-top {
  0% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }
}
@keyframes flip-horizontal-top {
  0% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }
}
</style>
