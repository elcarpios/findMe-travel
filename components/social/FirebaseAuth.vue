<template>
  <aside v-if="shouldPrompt" class="social-prompt">
    <button @click="closePrompt" class="close">
      X
    </button>
    <button @click="signIn" class="sign-in">
      Sign in with Google
    </button>
  </aside>
</template>

<script>
import { firebase } from '~/services/firebase';

export default {
  computed: {
    shouldPrompt () {
      return this.$store.getters['social/shouldPrompt'];
    }
  },
  methods: {
    signIn () {
      firebase.auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    },
    closePrompt () {
      this.$store.commit('social/prompted');
    }
  }
};
</script>

<style lang="postcss" scoped>
.social-prompt {
  background-color: rgba(255, 255, 255, 0.8);
  @apply fixed bottom-0 w-full px-4 py-4 flex justify-center;
}
.close {
  right: 20px;
  @apply fixed;
}
.sign-in {
  @apply py-2 px-4 border rounded;
}
</style>
