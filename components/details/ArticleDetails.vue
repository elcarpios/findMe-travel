<template>
  <article class="fixed w-full z-20 top-0 bottom-0 min-h-full overflow-y-scroll bg-white">
    <a v-if="isFromMosaic" class="go-back" target="_self" to="/">
      <button>X</button>
    </a>
    <a v-else @click="$router.go(-1)" class="go-back">
      <button>X</button>
    </a>
    <Img
      :src="headlines.media.src"
      :alt="headlines.media.alt"
      :className="'article-top-media'"
    />
    <div class="article-top-media-shadow" />
    <div class="relative flex justify-center w-full">
      <div class="article-description text-center absolute flex flex-col">
        <h1 class="article-title">
          {{ headlines.title }}
        </h1>
        <div class="article-details flex justify-around absolute min-w-full text-white -mt-8 text-sm">
          <span class="article-author metadata-component rounded left-0 ml-2 px-2 italic bg-red">
            {{ headlines.author }}
          </span>
          <time :datetime="headlines.date.datetime" class="article-date metadata-component rounded right-0 mr-4 px-2 bg-yellow">
            {{ headlines.date.output }}
          </time>
        </div>
        <div class="article-body-details relative text-justify mx-4 my-2">
          <h2 v-html="headlines.excerpt" class="details-excerpt text-l leading-normal text-justify py-2" />
          <client-only>
            <component :is="articleBody" class="py-1" />
          </client-only>
        </div>
      </div>
    </div>
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
    isFromMosaic: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return { articleBody: null };
  },
  head () {
    return this.$buildMetas(this.headlines);
  },
  created () {
    const post = require(`~/content/${this.type}/${this.slug}.md`);

    this.headlines = post.attributes;
    this.articleBody = post.vue.component;
  }
};
</script>

<style lang="postcss" scoped>
.go-back {
  @apply absolute text-white text-2xl top-0 right-0 mt-8 mr-8;
}

.article-top-media-shadow {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
  @apply absolute h-8 w-full -mt-8;
}

.article-title {
  margin-top: -1.2rem;
  padding-top: 0.7rem;
  padding-bottom: 0.6rem;
  @apply font-bold leading-relaxed px-4 shadow-md mx-6 bg-white border-grey border border-solid;
}

.page-enter {
  top: 100%;
}

.page-enter-to {
  top: 0;
}

.page-enter-active {
  transition: top 0.4s;
}

.page-leave {
  top: 0;
}

.page-leave-to {
  top: 100%;
}

.page-leave-active {
  transition: top 0.4s;
}

</style>
