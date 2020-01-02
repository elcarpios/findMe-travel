<template>
  <nav class="bg-primary py-1 text-white border-t border-white max-w-full">
    <ul class="flex no-wrap overflow-x-auto scrolling-touch w-auto">
      <li>Home</li>
      <li>Stories</li>
      <li>About</li>
    </ul>
  </nav>
</template>

<style lang="postcss" scoped>
ul::-webkit-scrollbar {
  display: none;
}

ul > li {
  @apply px-6 my-0 scrolling-touch flex-grow text-center;
}
</style>
