<template>
  <div class="w-full h-full">
    <HomeCard :key="section.slug" v-for="section in sections" :section="section" />
  </div>
</template>

<script>
import HomeCard from '~/components/mosaic/HomeCard';
import { SECTIONS } from '~/components/helpers/constants';

export default {
  components: { HomeCard },
  data () {
    return {
      sections: SECTIONS
    };
  },
  head () {
    const meta = {
      title: 'Home sweet home',
      description: 'This is the description'
    };
    return this.$buildMetas(meta);
  }
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
