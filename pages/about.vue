<template>
  <section class="about flex-grow relative bg-darkGrey">
    <Img
      :src="'/_nuxt/assets/images/findme/about-inside.jpeg'"
      :alt="'Wood desktop with some books'"
      :className="'media h-56'"
    />
    <div class="text-center flex justify-center">
      <h2 class="title">Carpio Foundation Poject</h2>
      <div class="description">
        Lorem fistrum al ataquerl te voy a borrar el cerito benemeritaar la caidita papaar papaar está la cosa muy malar hasta luego Lucas fistro. Ese hombree caballo blanco caballo negroorl está la cosa muy malar no puedor. Diodeno qué dise usteer torpedo me cago en tus muelas de la pradera.
        benemeritaar por la gloria de mi madre ese que llega hasta luego Lucas. Condemor a peich no puedor quietooor mamaar está la cosa muy malar te voy a borrar el cerito mamaar al ataquerl caballo blanco caballo negroorl. La caidita no puedor ese hombree pupita.
      </div>
    </div>
  </section>
</template>

<script>
import Img from '~/components/images/Img';

export default {
  components: { Img }
};
</script>

<style lang="postcss" scoped>
.title {
  border-radius: 0.375rem;
  @apply absolute tracking-wider py-2 px-8 -mt-6 font-bold text-white rounded bg-primary;
}

.description {
  @apply tracking-wide bg-white mt-8 mx-6 py-4 px-6 text-justify rounded-lg mb-6;
}
</style>
