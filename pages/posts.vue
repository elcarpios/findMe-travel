<template>
  <span>
    <ArticleMosaic :key="slug" v-for="slug in slugs" :slug="slug" :type="type" />
    <client-only>
      <infinite-loading v-if="lazySlugs.length > 0" @infinite="infiniteHandler" />
    </client-only>
    <nuxt-child keep-alive />
  </span>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import ArticleMosaic from '~/components/mosaic/ArticleMosaic';
import { MOSAIC } from '~/components/helpers/constants';

export default {
  components: { ArticleMosaic, InfiniteLoading },
  asyncData ({ route }) {
    const resolve = require.context('~/content/posts/', true, /\.md$/);
    const slugs = resolve.keys().map(slug => slug.slice(2).slice(0, -3));
    const lazySlugs = slugs.splice(MOSAIC.startingArticles);

    return {
      slugs,
      lazySlugs,
      type: 'posts'
    };
  },
  methods: {
    infiniteHandler ($state) {
      this.slugs = this.slugs.concat(this.lazySlugs.splice(0, MOSAIC.lazyLoadArticles));
    }
  }
};
</script>
