<template>
  <header class="max-w-full flex justify-around items-center py-2">
    <nuxt-link to="/">
      <div class="border-white-header">
        findMe.<span class="font-bold">travel</span>
      </div>
    </nuxt-link>
  </header>
</template>

<style lang="postcss" scoped>
header {
  background-image: linear-gradient(to bottom, #4dc0b5, #41baaf, #33b5a8, #21afa2, #00aa9b);
}

.border-white-header {
  @apply text-center border tracking-wide border-white rounded py-2 px-4 text-white;
}
</style>
