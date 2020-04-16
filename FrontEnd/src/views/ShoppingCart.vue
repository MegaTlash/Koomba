<template>
    <div class="ShoppingCart">
        <h1>CART</h1>
        <ul>
            <li id="cart" v-for="i in $parent.cartItems" :key="i">
                <img :src="require(`@/assets/Clothes/${i.img}`)"/>
                {{i.type}} - ${{i.price}}
                <button class="button is-success" id="remove" @click="remove()">Remove</button>
            </li>
            <button id="checkout" class ="button is-success" v-on:click="redirectCheckout">Checkout</button>
        </ul>
    </div>
    
</template>

<script>
export default {
    name: 'ShoppingCart',
    methods: {
        // Go to checkout page if Checkout button is clicked
        redirectCheckout() {
            console.log(this.$parent.cartItems);
            this.$router.push({name: `Checkout`}).catch(e => {
                if (e.name != "NavigationDuplicated") {
                    throw e;
                }
            });
        }, 
        // Remove cart item
        remove() {
            console.log(this.$parent.cartItems[0]);
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