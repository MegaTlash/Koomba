<template>
    <div class="Checkout">
        <ul>
            <p>{{numberOfRepeatedItems($parent.cartItems)}}</p>
            <li id="checkout" v-for="i in uniqueItems()" :key="i">
                <img :src="require(`@/assets/Clothes/${i}`)"/>

            </li>
            <p>Total before tax: ${{ calculateTotalBeforeTax() }}</p>
            <p>Total after tax: ${{ calculateTotalAfterTax() }}</p>
        </ul>
        <button id="Purchase" class ="button is-success">Purchase</button>
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
        calculateTotalAfterTax() {
            var total = 0;
            for (var i=0; i<this.$parent.cartItems.length; i++) {
                total += parseFloat(this.$parent.cartItems[i].price);
            }
            total += total * 0.13;
            return total;
        },

        calculateTotalBeforeTax() {
            var total = 0;
            for (var i=0; i<this.$parent.cartItems.length; i++) {
                total += parseFloat(this.$parent.cartItems[i].price);
            }
            return total;
        },

        uniqueItems() {
            var images = [];
            for (var i=0; i<this.$parent.cartItems.length; i++) {
                images[i] = this.$parent.cartItems[i].img;
                
            }
            //got from https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-itemsay-remove-duplicates
            const unique = [...new Set(images)]
            console.log(unique);
            return unique;
        },
        //took inspiration from https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
        numberOfRepeatedItems(items) {
            var num = [], prev;
                items.sort();
                for (var i = 0; i < items.length; i++ ) {
                    if (items[i].img !== prev) {
                        num.push(items[i].type.concat('\t'));
                        num.push(1);
                    } else {
                        num[num.length-1]++;
                    }
                    prev = items[i].img;
                }
                //var tag = document.getElementById("quantities");

                return num.toString().replace(/,/g, ' ');
            }
        },
    computed: {
        
    }
}


</script>

<style scoped>
#checkout {
    display: inline-block;
    width: 15%;
}
ul img {

}

p {
    font-size: 24px;
    padding: 1.5rem;
}

#numItems {
    margin-left: 1rem;
    margin-right: 1rem;
}

</style>