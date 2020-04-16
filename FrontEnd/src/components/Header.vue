<template>
  <div class="header">
    <img alt="Koomba Logo" src="../assets/koombaLOGO.png" class="logo" /> 
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
      return{
        forSale: [
        { invId: 1, name: 'An Item', image: '//placehold.it/200', price: 999 },
        { invId: 2, name: 'Thing', image: '//placehold.it/200', price: 1499 },
        { invId: 3, name: 'Doo-dad', image: '//placehold.it/200', price: 499 },
        { invId: 4, name: 'Other thing', image: '//placehold.it/200', price: 299 },
      ],
    };
  }
}
</script>

<style scoped>

.header {
  margin-top: 60px;
  text-align: center;
}

.logo {
    position: relative;
    top: -2rem;
    width: 12rem;
    height: auto;
}
</style>
