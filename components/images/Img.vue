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
img {
  @apply bg-secondary;
}
</style>
