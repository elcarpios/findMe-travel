<template>
  <div class="layout w-full min-w-screen h-full min-h-screen flex flex-col flex-wrap">
    <Header />
    <Menu />
    <Main class="flex-grow" />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/skeleton/Header';
import Menu from '~/components/skeleton/Menu';
import Main from '~/components/skeleton/Main';
import Footer from '~/components/skeleton/Footer';

export default {
  components: { Header, Main, Menu, Footer }
};
</script>
