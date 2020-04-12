<template>
    <div class="ShoppingCart">
        <h1>CART</h1>
        <ul>
            <li v-for="item in items" :key="item.name">
                {{ item.name }}
                <button  class="button is-success" v-on:click="items.splice(item, 1)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ShoppingCart',
    data() {
        return {
            items: [
                { name: 'Item' },
                { name: 'Item2' }
            ]
        }
    },
    methods: {
        removeItem(){
            this.remove();
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
</style>