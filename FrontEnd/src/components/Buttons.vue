<template>
    <div class="buttons">
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
            }
        }
    }
</script>

<style scoped>

.buttons {
  position: absolute;
  right: 0;
  margin-right: 1rem;
}
</style>
