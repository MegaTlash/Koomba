 
<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

     <!--If it is not the launch page-->
    <navigation v-if="!$route.meta.hideNavigation" >
    <Buttons />
    <Header title = "Koomba" />
    <Nav />
    </navigation>

    <!--Everyone needs this-->
    <router-view/>

    <!--If it is not the launch page-->
    <navigation v-if="!$route.meta.hideNavigation" >
    <Footer />
    </navigation>
    
  

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
}
</style>
