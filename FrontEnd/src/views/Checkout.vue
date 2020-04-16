<template>
    <div class="Checkout">
        <h1>YOOOOO</h1>
        <ul>
            
            <li id="checkout" v-for="i in $parent.cartItems" :key="i">
                {{i}}
            </li>
            <p>Uniques: "{{ uniqueItems() }}"</p>
            <p>Total after tax: "{{ calculateTotal() }}"</p>
        </ul>
        
        <!--<items v-for="(item, idx) in checkoutItems" :key="idx">
            {{}}
        </items>-->
    </div>
</template>

<script>
export default {
    name: 'Checkout',
    data() {
    },

    methods: { 
        calculateTotal() {
            var total = 0;
            for (var i=0; i<this.$parent.cartItems.length; i++) {
                total += parseFloat(this.$parent.cartItems[i].price);
            }
            total += total * 0.13;
            return total;
        },

        uniqueItems() {
            var images = [];
            for (var i=0; i<this.$parent.cartItems.length; i++) {
                images[i] = this.$parent.cartItems[i].img;
                //slice the unnecessary chars out of the jpg file path since we are sending through the require path (/img/hoodie.4d20434d.jpg) for example
                for(var j=0; j<images[i].length; j++) {
                    if(images[j] == '.') {
                        images[i] = images[i].slice(j, images[i].length);
                    }
                }
                images[i] = images[i].substring(5);
            }
            const unique = [...new Set(images)]
            console.log(unique);
            return unique;
        }
    },
    computed: {
        
    }
}


</script>

<style scoped>
ul img {
    width: 15%;
}
</style>