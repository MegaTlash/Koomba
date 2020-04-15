<!--
<template>
  <div id="Store">
    <ul>
        <Items v-bind:items="items"/>
        <li v-for="item in items" :key="item">
          {{item.itemType}}
        </li>
    </ul>
 </div>   
</template>


<script>
export default {
    name: 'Store',
    data() {
      return {
        items: [
          {
            _id: "001",
            itemType: "T-Shirt",
            itemPrice: "25",
            itemColour: "Blue",
            detailsURL: "/tbd?id=001",
            imageURL: "tbd"
          },

          {
            _id: "002",
            itemType: "Sweater",
            itemPrice: "60",
            itemColour: "Black",
            detailsURL: "/tbd?id=001",
            imageURL: "tbd"
          }
        ]
      }
      
    }
};




</script>

<style scoped>

</style>
-->

<template>
    <div class = "Store">
      <h1>STORE</h1>
      <ul>
        <!--<Items v-bind:items="items"/>-->
        <li v-for="(item, idx) in items" :key="idx">
          
          <img :src="require(`@/assets/Clothes/${item.imageURL}`)" @click="redirectItem(require(`@/assets/Clothes/${item.imageURL}`), item.itemType, item.itemPrice)"/>
          <p>{{item.itemType}}</p>
          <p>${{item.itemPrice}}</p>
          
        </li>
      </ul>
      <div class = "clothes-container">
          <div class = "clothes">
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
      }
    },
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

ul li p{
  font-family: Helvetica;
}

</style>

