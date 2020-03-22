<template>
  <nuxt-link :to="section.slug">
    <section class="w-full h-full h-48 inline-flex justify-center flex-col text-center">
      <Img
        :src="section.logo.src"
        :alt="section.logo.alt"
        :isLazy="section.logo.isLazy"
        :className="'media h-56'"
      />
      <div class="absolute w-full">
        <span class="text-white tracking-wider font-semibold text-2xl font-mono py-1 px-2">
          {{ section.name }}
        </span>
      </div>
    </section>
  </nuxt-link>
</template>

<script>
import Img from '~/components/images/Img';

export default {
  components: { Img },
  props: {
    section: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
span {
  background-color: rgba(0, 170, 155, 0.8);
}
</style>
