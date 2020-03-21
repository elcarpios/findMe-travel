<template>
  <section class="about flex-grow relative">
    <Img
      :src="'/_nuxt/assets/images/findme/about-inside.jpeg'"
      :alt="'Wood desktop with some books'"
      :className="'media h-56'"
    />
    <div class="text-center flex justify-center bg-white">
      <h2 class="title">Carpio Foundation Project</h2>
      <div class="description">
        Lorem fistrum al ataquerl te voy a borrar el cerito benemeritaar la caidita papaar papaar está la cosa muy malar hasta luego Lucas fistro. Ese hombree caballo blanco caballo negroorl está la cosa muy malar no puedor. Diodeno qué dise usteer torpedo me cago en tus muelas de la pradera.
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
  background: linear-gradient(100.18deg, #59E3D6 0.37%, #00AD9E 98.12%);
  @apply absolute tracking-wider py-2 px-8 -mt-6 font-bold text-white rounded;
}

.description {
  @apply tracking-wide italic mt-8 mx-6 py-4 px-4 text-justify mb-6;
}
</style>
