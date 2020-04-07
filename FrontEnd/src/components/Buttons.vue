<template>
    <div class="buttons">
        <button @click="redirectUser" class="button is-success">Sign-Up</button>
        <button class="button is-light">Login</button>
    </div>
</template>

<script>
    //import router from '../router/index.js'  // Just added this line and code works !!

    export default {
        name: 'Buttons',
        methods: {
            redirectUser() { // this method is called on button click
                this.$router.push({name: `SignUp`}).catch(e => {
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
