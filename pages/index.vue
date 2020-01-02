<template>
  <div>
    <h1 class="font-extrabold">
      Main Content
    </h1>
    <!-- <h1>My blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <h1>{{ post.attributes.title }}</h1>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  asyncData () {
    const resolve = require.context('~/content/posts', true, /\.md$/);

    return { posts: resolve.keys().map(resolve) };
  },
  methods: {
    getPermalink (post) {}
  }
};
</script>
