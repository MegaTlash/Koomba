<template>
    <div class="buttons">
        <div id="username">Guest</div>
        <i @click="redirectShoppingCart" class="fa fa-shopping-cart fa-2x"></i>
        <div id="initial">
            <button @click="redirectSignIn" class="button is-success" >Sign-Up</button>
            <button @click="redirectLogin" class="button is-light" >Login</button>
        </div>
        <button @click="logout" class="button is-light" id="logout">Logout</button>
    </div>
</template>

<script>
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
            },
            logout() { // Logout user
                document.getElementById('logout').style.display = "none";
                document.getElementById('initial').style.display = "block";
                document.getElementById('username').innerHTML = "Guest";
            }
        },
        
    }
</script>

<style scoped>
.fa-shopping-cart {
    padding-right: 2rem;
    cursor: pointer;
}

.fa-shopping-cart:hover {
    color: rgb(141, 197, 150);
}

.buttons {
  position: absolute;
  right: 0;
  margin-right: 2rem;
}

#initial {
    display: block;
}

#logout {
    display: none;
}

#username {
    font-weight: bold;
    padding-right: 2rem;
    cursor: pointer;
}

#username:hover {
    color: rgb(141, 197, 150);
}
</style>
