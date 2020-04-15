<template>
    <div class="ShoppingCart">
        <h1>CART</h1>
        <div v-if="item" v-html="item"></div>
        <ul>
            <li id="cart" v-for="i in items" :key="i.item">
                {{i.item}}
                <button class="button is-success" v-on:click="items.splice(i, 1)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
//import {itemToCartBus} from "../main";

export default {
    name: 'ShoppingCart',
    data() {
        return {
            items: [

            ],
            item: ''
        }
    },
    created() {
        //itemToCartBus.$on('add', (img, type, price) => {
        //    this.items.push({item: `${type} $${price}`});
        //});
        var newItem = `${this.$route.params.type} - $${this.$route.params.price}`
        if (newItem != `undefined - $undefined`) {
            this.items.push({item: newItem});
        }
    },
    methods: {
        addItem() {
            
        }
    }
};
</script>

<style scoped>
h1 {
    font-size: 3rem;
    font-weight: bold;
    font-style: italic;
    color: rgb(141, 197, 150);
}

ul {
    padding-top: 2rem;
    width: 40%;
    margin: auto;
}

li {
    font-size: 1.5rem;
    padding: 2rem;
    border: 1px solid rgb(141, 197, 150);
    border-radius: 15px;
}

button {
   margin-left: 4rem;
}
</style>