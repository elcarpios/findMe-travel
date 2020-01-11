<template>
  <img :src="src" :alt="alt" :class="className + ' object-cover w-full text-2xl text-center italic'">
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
@keyframes animated-background {
  0% { background-position:0 0 }
  100% { background-position:200vw 0 }
}

img {
  line-height: 3em;
}

img:not(.isLoaded) {
  border: 1px solid #ADAFBC;
  background: linear-gradient(to right, #D8D9DD, #ADAFBC, #D8D9DD);
  background-size: 200vw 100%;
  animation: animated-background 1.8s backwards infinite;
}
</style>
