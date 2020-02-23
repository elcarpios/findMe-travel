<template>
  <article class="fixed z-20 top-0 bottom-0 min-h-full overflow-y-scroll bg-white">
    <a v-if="isFromMosaic" class="go-back" target="_self" to="/">
      <button>X</button>
    </a>
    <a v-else @click="$router.go(-1)" class="go-back">
      <button>X</button>
    </a>
    <Img
      :src="headlines.media.src"
      :alt="headlines.media.alt"
      :className="'media h-56'"
    />
    <div class="article-details py-3 px-2">
      <div class="metadata-details flex justify-between items-center mb-2">
        <span class="author border-l-4 border-red pl-2 italic">{{ headlines.author }}</span>
        <time
          :datetime="headlines.date"
          class="date pr-1 font-bold text-sm"
        >{{ headlines.date }}</time>
      </div>
      <h1 v-html="headlines.title" class="title font-bold text-xl leading-normal text-justify mb-2" />
      <ul v-if="headlines.categories" class="categories mb-2">
        <li :key="index" v-for="(category, index) in headlines.categories" class="inline-block bg-primary text-white py-1 px-2 mr-2 text-xs font-bold rounded-sm uppercase">
          {{ category }}
        </li>
      </ul>
      <div v-html="headlines.description" class="details-description" />
      <component :is="articleBody" />
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
  @apply absolute text-white text-2xl;
  top: 15px;
  right: 25px;
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
