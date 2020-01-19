<template>
  <header class="max-w-full flex justify-around items-center py-2">
    <nuxt-link to="/">
      <div class="border-white-header">
        findMe.<span class="font-bold">travel</span>
      </div>
    </nuxt-link>
    <nuxt-link v-if="user" to="/my-space">
      <div class="border-white-header">
        ✈️ {{ user }}
      </div>
    </nuxt-link>
    <button v-else @click="signIn" class="border-white-header">
      Sign in
    </button>
  </header>
</template>

<style scoped>
header {
  background-image: linear-gradient(to bottom, #4dc0b5, #41baaf, #33b5a8, #21afa2, #00aa9b);
}
</style>

<script>
import { firebase } from '~/services/firebase';

export default {
  computed: {
    user () {
      return this.$store.getters['social/username'];
    }
  },
  methods: {
    signIn () {
      firebase.auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
  }
};
</script>

<style lang="postcss" scoped>
.border-white-header {
  @apply text-center border tracking-wide border-white rounded py-2 px-4 text-white;
}
</style>
