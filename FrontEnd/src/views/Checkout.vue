<template>
    <div class="Checkout">
        <h1>YOOOOO</h1>
        {{checkoutItems}}
        <!--<items v-for="(item, idx) in checkoutItems" :key="idx">
            {{}}
        </items>-->
    </div>
</template>

<script>
export default {
    name: 'Checkout',
    data: function() {
        return {
            checkoutItems: []
        };
    },
    created() {
        this.checkoutItems = this.$route.params.checkoutItems;
    },
    methods: { 

    }
}


</script>

<style scoped>

</style>