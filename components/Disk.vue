<template>
  <div
    class="disk"
    :style="{ animationDelay: Math.random() * Math.floor(1) + 's' }"
  ></div>
</template>

<script>
export default {
  name: 'Disk'
}
</script>

<style scoped>
.disk {
  position: relative;
  width: 80%;
  padding-bottom: 80%;
  border-radius: 50%;
  transition: background-color 0.3s;
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
</style>
