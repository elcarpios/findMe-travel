<template>
  <div>
    <h1>
      {{ userName }}
    </h1>
    <button @click="logout">
      Logout
    </button>
  </div>
</template>

<script>
import { auth } from '~/services/firebase';

export default {
  computed: {
    userName () {
      return this.$store.state.social.user.displayName;
    }
  },
  methods: {
    logout () {
      auth.signOut().then(() => {
        this.$store.commit('social/logout');
        this.$router.push({ name: 'index' });
      }).catch(() => {});
    }
  }
};
</script>
