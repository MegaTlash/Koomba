<template>
    <div class="buttons">
        <!-- Name of user displayed near buttons -->
         <div id="username">{{this.$parent.firstname}}</div>

        <!-- Initial buttons that are Displayed -->
        <i @click="redirectShoppingCart" class="fa fa-shopping-cart fa-2x"><div>{{$parent.cartItems.length}}</div></i>
        <div id="initial">
            <button @click="redirectSignUp" class="button is-success" >Sign-Up</button>
            <button @click="redirectLogin" class="button is-light" >Login</button>
        </div>

        <!-- Logout button is displayed when user logs in -->
        <button @click="logout" class="button is-light" id="logout">Logout</button>
    </div>
</template>

<script>
    export default {
        name: 'Buttons',
        methods: {

            // Redirects user to Sign Up page when "Sign-Up" button is clicked
            redirectSignUp() { 
                this.$router.push({name: `SignUp`}).catch(e => {
                    if (e.name != "NavigationDuplicated") {
                        throw e;
                    }
                }) 
            },

            // Redirects user to Login page when "Login" button is clicked
            redirectLogin() { 
                this.$router.push({name: `Login`}).catch(e => {
                    if (e.name != "NavigationDuplicated") {
                        throw e;
                    }
                }) 
            },

            // Redirects user to the Shopping Cart Page when the cart image is clicked
            redirectShoppingCart() {
                this.$router.push({name: `ShoppingCart`}).catch(e => {
                    if (e.name != "NavigationDuplicated") {
                        throw e;
                    }
                }) 
            },

            // User logouts out when "Logout" button is clicked
            logout() {
                if (confirm('Are you sure you want to logout?')){

                    //Logout button is hidden and initial buttons are displayed
                    //Name displayed is changed back to Guest
                    document.getElementById('logout').style.display = "none";
                    document.getElementById('initial').style.display = "block";
                    
                    this.$parent.firstname = "Guest";
                    document.getElementById('username').innerHTML = this.$parent.firstname;
                    document.getElementById('messages').innerHTML = "Ask a question if you require any assistance." // Reset chat

                }
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
