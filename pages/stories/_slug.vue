<template>
  <ArticleDetails :isFromMosaic="isFromMosaic" :slug="slug" :type="type" />
</template>

<script>
import ArticleDetails from '~/components/details/ArticleDetails';

export default {
  components: { ArticleDetails },
  asyncData ({ params, route }) {
    return {
      type: route.name.includes('posts') ? 'posts' : 'stories',
      isFromMosaic: params.isFromMosaic,
      slug: params.slug
    };
  }
};
</script>
