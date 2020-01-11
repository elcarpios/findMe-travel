<template>
  <ArticleDetails :isFromMosaic="isFromMosaic" :slug="slug" :type="type" />
</template>

<script>
import ArticleDetails from '~/components/details/ArticleDetails';

export default {
  components: { ArticleDetails },
  asyncData ({ params, route }) {
    return {
      type: 'stories',
      isFromMosaic: params.isFromMosaic,
      slug: params.slug
    };
  }
};
</script>
