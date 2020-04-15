<template>
    <div class="Checkout">
        <li v-for="item in items" :key="item.name">
            {{item.name}}
        </li>
    </div>
</template>

<script>
import items from 'ShoppingCart.vue'
export default {
    methods: { 
        getItems() {
            return items;
        }
    }
}


</script>

<style scoped>

</style>