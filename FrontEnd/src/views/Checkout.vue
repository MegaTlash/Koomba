<template>
    <div class="Checkout">
        <h1>YOOOOO</h1>
        <items @currentCart="getItems(currentCart)" />
        <!--<items v-for="(item, idx) in checkoutItems" :key="idx">
            {{}}
        </items>-->
    </div>
</template>

<script>
import items from './ShoppingCart'
export default {
    name: 'Checkout',
    components: {
        items
    },
    data: function() {
        return {
            checkoutItems: []
        };
    },

    methods: { 
        getItems(variable) {
            this.checkoutItems = variable;
        }
    }
}


</script>

<style scoped>

</style>