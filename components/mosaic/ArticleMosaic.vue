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
    <nuxt-link :to="{ name: 'posts-slug', params: { slug, isDeeplinking: false }}">
      <img
        :src="post.media"
        class="media h-48 object-fill w-full"
      >
      </img>
    </nuxt-link>
    <div class="mosaic-subtitle">
      {{ post.subtitle }}
    </div>
    <nuxt-link :to="{ name: 'posts-slug', params: { slug, isDeeplinking: false }}">
      <p class="mosaic-title justify font-bold leading-relaxed mt-1 mb-1 mx-1">
        {{ post.title }}
      </p>
    </nuxt-link>
  </article>
</template>

<script>
export default {
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
