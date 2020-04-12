<template>
    <div class="buttons">
        <i @click="redirectShoppingCart" class="fa fa-shopping-cart fa-2x"></i>
        <button @click="redirectSignIn" class="button is-success">Sign-Up</button>
        <button @click="redirectLogin" class="button is-light">Login</button>
    </div>
</template>

<script>
    //import router from '../router/index.js'  // Just added this line and code works !!

    export default {
        name: 'Buttons',
        methods: {
            redirectSignIn() { // this method is called on button click
                this.$router.push({name: `SignUp`}).catch(e => {
                    if (e.name != "NavigationDuplicated") {
                        //console.log('no duplicates')
                        throw e;
                    }
                }) 
            },
            redirectLogin() { // this method is called on button click
                this.$router.push({name: `Login`}).catch(e => {
                    if (e.name != "NavigationDuplicated") {
                        //console.log('no duplicates')
                        throw e;
                    }
                }) 
            },
            redirectShoppingCart() {
                this.$router.push({name: `ShoppingCart`}).catch(e => {
                    if (e.name != "NavigationDuplicated") {
                        //console.log('no duplicates')
                        throw e;
                    }
                }) 
            }
        }
    }
</script>

<style scoped>
.fa-shopping-cart {
    padding-right: 2rem;
    cursor: pointer;
}

.buttons {
  position: absolute;
  right: 0;
  margin-right: 2rem;
}
</style>
