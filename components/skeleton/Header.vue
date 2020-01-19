<template>
  <header class="max-w-full flex justify-around items-center py-2">
    <nuxt-link to="/">
      <div class="text-center border tracking-wide border-white rounded py-2 px-4 text-white">
        findMe.<span class="font-bold">travel</span>
      </div>
    </nuxt-link>
    <nuxt-link v-show="user" to="/my-space">
      <div class="text-center border tracking-wide border-white rounded py-2 px-4 text-white">
        ✈️ {{ user }}
      </div>
    </nuxt-link>
  </header>
</template>

<style scoped>
header {
  background-image: linear-gradient(to bottom, #4dc0b5, #41baaf, #33b5a8, #21afa2, #00aa9b);
}
</style>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters['social/isLogged'];
    }
  }
};
</script>
