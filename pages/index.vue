<template>
  <h1>Welcome home</h1>
</template>

<script>
export default {
  head () {
    const meta = {
      title: 'Home sweet home',
      description: 'This is the description'
    };
    return this.$buildMetas(meta);
  }
};
</script>
