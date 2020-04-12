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
         <ul>
        <!--<Items v-bind:items="items"/>-->
        <li v-for="(item, idx) in items" :key="idx">
          
          <img :src="require(`@/assets/Models/Jordan/${item.imageURL}`)"/>
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
import ClothesService from '../ClothesServices.js';
export default {
    name: 'Store',
    data(){
        return {
            items: [
              /*{
            _id: "001",
            itemType: "T-Shirt",
            itemPrice: "25",
            itemColour: "Blue",
            detailsURL: "/tbd?id=001",
            imageURL: require('../assets/Models/Jordan/JordanOutsidePicRain.jpg')
          },

          {
            _id: "002",
            itemType: "Sweater",
            itemPrice: "60",
            itemColour: "Black",
            detailsURL: "/tbd?id=002",
            imageURL: require('../assets/Models/Jordan/JordanOutsidePicRain.jpg')
          },

          {
            _id: "002",
            itemType: "Sweater",
            itemPrice: "60",
            itemColour: "Black",
            detailsURL: "/tbd?id=002",
            imageURL: require('../assets/Models/Jordan/JordanOutsidePicRain.jpg')
          },

          {
            _id: "002",
            itemType: "Sweater",
            itemPrice: "60",
            itemColour: "Black",
            detailsURL: "/tbd?id=002",
            imageURL: require('../assets/Models/Jordan/JordanOutsidePicRain.jpg')
          },

          {
            _id: "002",
            itemType: "Sweater",
            itemPrice: "60",
            itemColour: "Black",
            detailsURL: "/tbd?id=002",
            imageURL: require('../assets/Models/Jordan/JordanOutsidePicRain.jpg')
          },

          {
            _id: "002",
            itemType: "Sweater",
            itemPrice: "60",
            itemColour: "Black",
            detailsURL: "/tbd?id=002",
            imageURL: require('../assets/Models/Jordan/JordanOutsidePicRain.jpg')
          }*/

          ],
            error: '',
            text: '',
        }
    },
    methods: {
      getImg(imgName) {
        return require(imgName)
      }
    },
    async created(){
        try{
            this.items = await ClothesService.getClothes();
            console.log(this.items);
        }catch(err){
            this.error = err.message;
        }
    }
};



</script>

<style scoped>
h1 {
    font-size:3rem;
    font-weight: bold;
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

