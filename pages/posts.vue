<template>
  <span>
    <ArticleMosaic :key="slug" v-for="slug in slugs" :slug="slug" :type="type" />
    <nuxt-child keep-alive />
  </span>
</template>

<script>
import ArticleMosaic from '~/components/mosaic/ArticleMosaic';

export default {
  components: { ArticleMosaic },
  asyncData ({ route }) {
    let resolve;
    const isLatest = route.name.includes('posts');

    if (isLatest) {
      resolve = require.context('~/content/posts/', true, /\.md$/);
    } else {
      resolve = require.context('~/content/stories/', true, /\.md$/);
    }
    return {
      slugs: resolve.keys().map(slug => slug.slice(2).slice(0, -3)),
      type: isLatest ? 'posts' : 'stories'
    };
  }
};
</script>
