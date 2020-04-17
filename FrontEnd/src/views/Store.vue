<template>
    <div class = "Store">
      <h1>STORE</h1>
      <ul>
        <!--<Items v-bind:items="items"/>-->
        <li v-for="(item, idx) in items" :key="idx">
          <img :src="require(`@/assets/Clothes/${item.imageURL}`)" @click="redirectItem(item.imageURL, item.itemType, item.itemPrice)"/>
          <p>{{item.itemType}}</p>
          <p>${{item.itemPrice}}</p>
        </li>
      </ul>
      <div class = "clothes-container">
          <div class = "clothes">
            <div class= "buttons">
              <button @click="redirectGraph" class = "button is-success" id = "analytics">Anayltics</button>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Store',
    data(){
        return {
            items: [],
            error: '',
            text: '',
        }
    },
    methods: {
      getImg(imgName) {
        return require(imgName)
      },
      redirectItem(img, type, price) { // Go to Item page and pass attributes of selected item to the page
        this.$router.push({name: `Item`, params: {img: img, type: type, price: price}}).catch(e => {
            if (e.name != "NavigationDuplicated") {
                //console.log('no duplicates')
                throw e;
            }
        }) 
      },
      redirectGraph(){ // Go to analytics page
        this.$router.push({name: `Graph`}).catch(e => {
          if(e.name != "Navigation Duplicated"){
            throw e;
          }
        })
      }
    },
    //Getting the data from the backend
    created: function(){
      axios.get('http://localhost:3000/api/clothes')
      .then((response) => this.items = response.data)
      .catch((error) => this.error = error);
    },
};



</script>

<style scoped>
h1 {
    font-size:3rem;
    font-weight: bold;
    font-style: italic;
    color: rgb(141, 197, 150);
    text-align: center;
}

img {
  cursor: pointer;
}

ul {
  display: flex;
  flex-wrap: wrap;
  padding-left: 20rem;
  padding-right: 20rem;
}

ul li {
    list-style: none;
    flex-basis: 33.333333%;
    padding: 3rem;
}

#analytics{
  margin: auto;
  display: flex; 
  justify-content: center;
}

ul li p{
  font-family: Helvetica;
}

</style>

