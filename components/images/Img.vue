<template>
  <img :src="src" :alt="alt" :class="className">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: 'Travel Image'
    },
    className: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="postcss" scoped>
@keyframes animated-background{
  0% { background-position:0 0 }
  100% { background-position:120vw 0 }
}

img {
  background: linear-gradient(to right, #D8D9DD, #ADAFBC);
  background-size: 120vw 100%;
  animation: animated-background 1.6s forwards infinite;
}
</style>
