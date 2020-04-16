<template>
    <div class="Item">
        <div class="columns">
            <div class="column is-quarter"></div>
            <div class="column is-quarter">
                <img :src='img'/>
            </div>
            <div class="column is-quarter" id="info">
                <h1>{{type}}</h1>
                <h2>${{price}}</h2>
                <button @click="addToCart" class="button is-success" id="addToCart">Add to cart</button>
            </div>
            <div class="column is-quarter"></div>
        </div>
    </div>
</template>

<script>
//import {itemToCartBus} from "../main";

export default {
    name: 'Item',
    data () {
        return {
            img: '',
            type: '',
            price: 0
        }
    },
    created() {
        this.img = this.$route.params.img;
        this.type = this.$route.params.type;
        this.price = this.$route.params.price;
    },
    methods: {
        // Add chosen item to parent variable that holds cart items, allows for other pages to access it
        addToCart() {
            this.$parent.cartItems.push({item: {img: this.img, type: this.type, price: this.price}});
        }
    }
}
</script>

<style scoped>
.column {
    margin-top: 3rem;
    text-align: left;
    padding-right: 3rem;
    padding-left: 3rem;
}

img {
    max-width: 350px;
}

h1 {
    font-size:3rem;
    font-style: italic;
    color: rgb(141, 197, 150);
}

h2 {
    font-size:2.5rem;
    font-weight: bold;
}

#addToCart {
    margin-top: 7rem;
}

</style>