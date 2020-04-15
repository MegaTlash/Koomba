<template>
    <div class="ShoppingCart">
        <h1>CART</h1>
        <div v-if="item" v-html="item"></div>
        <ul>
            <li id="cart" v-for="i in $parent.cartItems" :key="i.item">
                <img :src='i.item.img'/>
                {{i.item.type}} - ${{i.item.price}}
                <button class="button is-success" id="remove" v-on:click="$parent.cartItems.splice(i, 1)">Remove</button>
            </li>
            <button id="checkout" class ="button is-success" v-on:click="redirectCheckout">Checkout</button>
        </ul>
    </div>
    
</template>

<script>
//import {itemToCartBus} from "../main";
export default {
    name: 'ShoppingCart',
    methods: {
        // Go to checkout page if Checkout button is clicked
        redirectCheckout() {
            this.$router.push({name: `Checkout`}).catch(e => {
                if (e.name != "NavigationDuplicated") {
                    throw e;
                }
            });
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
    width: 60%;
    margin: auto;
}

li {
    font-size: 1.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgb(141, 197, 150);
}

img {
    width: 15%;
}

#remove {
   float: right;
   margin-top: 1.5rem;
}

#checkout {
    margin: 2rem;
}
</style>