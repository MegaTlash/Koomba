<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <Buttons />
    <Header title = "Koomba" />
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>

<script>

import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Buttons from "@/components/Buttons.vue";

export default {
  name: 'App',
  components: {
    Nav, Header, Footer, Buttons
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2A543C;
  margin-top: 60px;
}
</style>
