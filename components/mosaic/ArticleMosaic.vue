<template>
  <article class="article-mosaic w-full mt-1 px-2 mb-4">
    <div class="metadetails flex justify-between items-center mb-1 mt-2 italic">
      <span class="mosaic-author border-l-4 border-red pl-2">
        {{ post.author }}
      </span>
      <time :datetime="post.date" class="mosaic-date pr-1 font-bold text-sm">
        {{ post.date }}
      </time>
    </div>
    <nuxt-link :to="{ name: `${type}-slug`, params: { slug, isFromMosaic: false }}">
      <Img
        :src="post.media.src"
        :alt="post.media.alt"
        :className="'media h-48'"
      />
    </nuxt-link>
    <div class="mosaic-subtitle">
      {{ post.subtitle }}
    </div>
    <nuxt-link :to="{ name: `${type}-slug`, params: { slug, isFromMosaic: false }}">
      <h1 class="mosaic-title justify font-bold leading-relaxed mt-1 mb-1 mx-1">
        {{ post.title }}
      </h1>
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
