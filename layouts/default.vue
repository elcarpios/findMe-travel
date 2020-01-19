<template>
  <div class="layout w-full min-w-screen h-full min-h-screen flex flex-col flex-wrap">
    <Header />
    <Menu />
    <Main class="flex-grow" />
    <Footer />
    <Toast />
    <FirebaseAuth />
  </div>
</template>

<script>
import Header from '~/components/skeleton/Header';
import Menu from '~/components/skeleton/Menu';
import Main from '~/components/skeleton/Main';
import Footer from '~/components/skeleton/Footer';
import Toast from '~/components/skeleton/Toast';
import FirebaseAuth from '~/components/social/FirebaseAuth';

export default {
  components: { Header, Main, Menu, Toast, Footer, FirebaseAuth }
};
</script>
