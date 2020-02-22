<template>
  <nav class="sticky z-10 top-0 bg-primaryDark pt-1 text-white border-t border-white max-w-full">
    <ul class="flex no-wrap overflow-x-auto scrolling-touch w-auto">
      <nuxt-link
        :key="section.slug"
        v-for="section in sections"
        :to="{ name: section.slug }"
        class="link border-primaryDark border-b-4 h-10"
      >
        {{ section.name }}
      </nuxt-link>
    </ul>
  </nav>
</template>

<script>
import { SECTIONS } from '~/components/helpers/sections';

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
  @apply tracking-wider font-mono text-sm my-0 scrolling-touch flex-grow text-center flex flex-col justify-center;
}
</style>
// TODO: Increas z-index to avoid position:absolute collision
