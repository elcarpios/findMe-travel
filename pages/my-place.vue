<template>
  <section class="flex items-center w-full justify-center flex-grow bg-secondary">
    <div v-if="user">
      <button class="social-button" @click="logout">
        Logout
      </button>
    </div>
    <div v-else>
      <ul class="social-group text-left my-6 mx-2">
        <li v-for="social in SOCIALS" class="social-item mb-6">
          <button
            @click="signIn"
            :style="{ backgroundColor: social.bgColor, color: social.color }"
            class="social-button"
          >
            Sign in with {{ social.name }}
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { auth, firebase } from '~/services/firebase';
import { SOCIALS } from '~/components/helpers/social';

export default {
  data () {
    return { SOCIALS };
  },
  computed: {
    user () {
      return this.$store.getters['social/username'];
    },
    userName () {
      return this.$store.state.social.user.displayName;
    }
  },
  methods: {
    signIn () {
      firebase.auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    },
    logout () {
      auth.signOut().then(() => {
        this.$router.push({ name: 'index' });
        this.$store.commit('social/logout');
      }).catch(() => {});
    }
  }
};
</script>

<style lang="postcss" scoped>
.social-button {
  min-width: 220px;
  min-height: 40px;
  @apply py-2 px-4 shadow-md rounded-sm font-medium tracking-tight bg-white font-serif;
}
</style>
