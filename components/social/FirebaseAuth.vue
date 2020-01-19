<template>
  <aside v-if="shouldPrompt" class="fixed bottom-0 w-full bg-white">
    <button @click="signIn" class="py-2 px-4 border rounded">
      Sign in with Google
    </button>
  </aside>
</template>

<script>
import { firebase } from '~/services/firebase';

export default {
  computed: {
    shouldPrompt () {
      return !this.$store.getters['social/isLogged'];
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
