<template>
  <nav class="bg-primaryDark pt-1 text-white border-t border-white max-w-full">
    <ul class="flex no-wrap overflow-x-auto scrolling-touch w-auto">
      <nuxt-link
        :key="section.slug"
        v-for="section in sections"
        :to="`/${section.slug}`"
        class="link border-primaryDark border-b-4"
      >
        {{ section.name }}
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
import { SECTIONS } from '~/components/helpers/constants';

export default {
  data () {
    return {
      sections: SECTIONS,
      selected: ''
    };
  },
  created () {
    this.selected = this.$route.name;
  }
};
</script>

<style lang="postcss" scoped>
.nuxt-link-active {
  @apply border-white border-b-4;
}

ul::-webkit-scrollbar {
  display: none;
}

ul > .link {
  @apply px-6 my-0 scrolling-touch flex-grow text-center;
}
</style>
