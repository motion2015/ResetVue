<template>
  <div id="wrap">
    <h1 class="blind">웹사이트 제목</h1>
    <Header />
    <article id="container">
      <router-view />
    </article>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
