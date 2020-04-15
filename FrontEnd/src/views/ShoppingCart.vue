<template>
    <div class="ShoppingCart">
        <h1>CART</h1>
        <ul>
            <li v-for="item in items" :key="item.name">
                {{ item.name }}
                {{ item.price }}
                <button class="button is-success" v-on:click="items.splice(item, 1)">Remove</button>
            </li>
            <button id="checkout" class ="button is-success" v-on:click="redirectItem">Checkout</button>
        </ul>
        <Checkout checkoutItems='items' />
    </div>
    
</template>

<script>
export default {
    name: 'ShoppingCart',
    data() {
        return {
            items: [
                { name: 'Item' },
                { name: 'Item2' },
                { price: '50'},
                { price: '70'}
            ]
        }
    },
    methods: {
        redirectItem() {
            this.$router.push({name: `Checkout`}).catch(e => {
            if (e.name != "NavigationDuplicated") {
                //console.log('no duplicates')
                throw e;
            }
        }) 
        },
        submit: function() {
            this.$emit("currentCart", this.items);
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
    padding: 2rem;
    border: 1px solid rgb(141, 197, 150);
    border-radius: 15px;
}

button {
   margin-left: 4rem;
}

#checkout {
    margin: 2rem;
}
</style>