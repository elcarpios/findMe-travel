<template>
  <section class="flex w-full justify-center flex-grow">
    <div v-if="user">
      <button @click="logout" class="social-button">
        Logout
      </button>
    </div>
    <div v-else class="w-full">
      <div class="my-plans-landpage">
        <h1 class="m-6 tracking-widest text-2xl">
          Welcome to your place
        </h1>
        <div class="svg-grid">
          <img
            v-for="icon in icons"
            :src="`/_nuxt/assets/images/findme/icons/${icon}.svg`"
            height="35px"
            width="35px"
          >
        </div>
        <div class="my-6 px-6 w-full tracking-wide">
          <h2>
            Here you can:
          </h2>
          <ul class="my-1 px-2 italic">
            <li>- Organize plans with friends</li>
            <li>- Keep track of your plans</li>
          </ul>
        </div>
      </div>
      <ul class="social-group text-sm mt-6 mx-2 flex justify-center items-center flex-col">
        <li v-for="social in SOCIALS" class="social-item mb-4">
          <button
            @click="signIn"
            :style="{ backgroundColor: social.bgColor, color: social.color }"
            class="social-button"
          >
            <img
              :src="social.icon.src"
              :height="`${social.icon.height}px`"
              :width="`${social.icon.width}px`"
              class="mr-4 ml-10"
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
    return {
      icons: ['walk', 'sun', 'pizza', 'ship', 'airplane', 'earth'],
      SOCIALS
    };
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
.my-plans-landpage {
  background: linear-gradient(180deg, #00AA9B 0%, rgba(77, 192, 181, 0.5) 87.66%);
  height: 20rem;
  margin-top: 1px;
  border-bottom-right-radius: 50%;
  @apply flex flex-col text-white items-center;
}

.svg-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 4rem;
  grid-row-gap: 2rem;
}

.social-item {
  min-width: 80%;
}

.social-button {
  min-width: 220px;
  min-height: 40px;
  @apply font-bold py-2 px-4 shadow tracking-tight border rounded-lg flex items-stretch w-full;
}
</style>
