<template>
    <div class="buttons">
        <div id="username">{{this.$parent.firstname}}</div>
        <i @click="redirectShoppingCart" class="fa fa-shopping-cart fa-2x"><div>{{$parent.cartItems.length}}</div></i>
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
                        throw e;
                    }
                }) 
            },
            redirectLogin() { // this method is called on button click
                this.$router.push({name: `Login`}).catch(e => {
                    if (e.name != "NavigationDuplicated") {
                        throw e;
                    }
                }) 
            },
            redirectShoppingCart() {
                this.$router.push({name: `ShoppingCart`}).catch(e => {
                    if (e.name != "NavigationDuplicated") {
                        throw e;
                    }
                }) 
            },
            logout() { // Logout user
                document.getElementById('logout').style.display = "none";
                document.getElementById('initial').style.display = "block";
                this.$parent.firstname = "Guest";
                document.getElementById('username').innerHTML = this.$parent.firstname;
                document.getElementById('messages').innerHTML = "Ask a question if you require any assistance." // Reset chat
            }
        },
        
    }
</script>

<style scoped>
i div {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 1rem;
}

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
