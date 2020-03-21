<template>
  <article class="article-mosaic relative w-full mb-24 h-full w-full">
    <nuxt-link :to="{ name: `${type}-slug`, params: { slug, isFromMosaic: false }}">
      <Img
        :src="post.media.src"
        :alt="post.media.alt"
        :className="'media h-56 relative'"
      />
      <div class="metadetails absolute top-0 min-w-full text-white mb-1 mt-4 px-4 text-sm">
        <span class="mosaic-author metadata-component left-0 ml-2 italic bg-red">
          {{ post.author }}
        </span>
        <time :datetime="post.date.datetime" class="mosaic-date metadata-component right-0 mr-4 bg-yellow">
            {{ post.date.output }}
        </time>
      </div>
      <div class="relative flex justify-center w-full">
        <div class="mosaic-description text-center absolute flex flex-col">
          <h1 class="mosaic-title font-bold leading-relaxed px-4 py-1 shadow-md -m-5 mx-6 bg-white border-grey border border-solid">
           {{ post.title }}
          </h1>
          <h2 class="mosaic-excerpt w-full shadow tracking-wide mt-8 px-4 pt-1 pb-2 text-sm">
            {{ post.excerpt }}
          </h2>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
import Img from '~/components/images/Img';

export default {
  components: { Img },
  props: {
    slug: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      post: {}
    };
  },
  created () {
    this.post = require(`~/content/${this.type}/${this.slug}.md`).attributes;
  }
};
</script>

<style lang="postcss" scoped>
.metadata-component {
  border-radius: 0.375rem;
  @apply px-2 absolute;
}
</style>
