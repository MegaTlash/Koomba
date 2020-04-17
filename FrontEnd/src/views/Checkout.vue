<template>
    <div class="checkout">
        <ul>
            <p>{{chosenItems}}</p>
            <li id="unique" v-for="i in uniqueItems()" :key="i">
                <img :src="require(`@/assets/Clothes/${i}`)"/>
            </li>
            <p>Total before tax: ${{ totalBeforeTax }}</p>
            <p>Total after tax: ${{ totalAfterTax }}</p>
        </ul>
        <button id="Purchase" class ="button is-success">Purchase</button>
    </div>
</template>

<script>
export default {
    name: 'Checkout',
    data(){
        return {
            totalAfterTax: 0,
            totalBeforeTax: 0,
            images: [],
            chosenItems: ''
        }
    },
    created() {
        this.totalAfterTax = this.calculateTotalAfterTax();
        this.totalBeforeTax = this.calculateTotalBeforeTax();
        this.images = this.uniqueItems();
        this.chosenItems = this.numberOfRepeatedItems();
    },
    methods: { 
        // This function adds tax to the total
        calculateTotalAfterTax() {
            for (var i=0; i < this.$parent.cartItems.length; i++) {
                this.totalAfterTax += parseFloat(this.$parent.cartItems[i].price);
            }
            this.totalAfterTax += this.totalAfterTax * 0.13;
            this.totalAfterTax = this.totalAfterTax.toFixed(2); // Two decimal places for money
            return this.totalAfterTax;
        },
        // This function calculates the total before tax
        calculateTotalBeforeTax() {
            for (var i=0; i<this.$parent.cartItems.length; i++) {
                this.totalBeforeTax += parseFloat(this.$parent.cartItems[i].price);
            }
            this.totalBeforeTax = this.totalBeforeTax.toFixed(2); // Two decimal places for money
            return this.totalBeforeTax;
        },
        // This function distinguishes the unique items in the store
        uniqueItems() {
            for (var i=0; i<this.$parent.cartItems.length; i++) {
                this.images[i] = this.$parent.cartItems[i].img;
            }
            //got from https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-itemsay-remove-duplicates
            this.images = [...new Set(this.images)];
            return this.images;
        },
        //took inspiration from https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
        // This function counts the number of repeated items chosen
        numberOfRepeatedItems() {
            var items = this.$parent.cartItems;
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
            this.chosenItems = num.toString().replace(/,/g, ' ');
            return this.chosenItems;
        }
    }
}
</script>

<style scoped>
#unique {
    display: inline-block;
    width: 15%;
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