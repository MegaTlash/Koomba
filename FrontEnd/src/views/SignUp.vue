<template>
    <div class = "SignUp">
        <link rel="stylesheet" 
            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
            integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
            crossorigin="anonymous">
        <h1>SIGN UP</h1>
         <div class="form">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" v-model="firstName" placeholder="First Name">
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" v-model="lastName" placeholder="Last Name">
                    <span class="icon is-small is-left">
                        <i class="fas fa-id-card"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" v-model="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </p>
            </div>
            <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="password" v-model="password" placeholder="Password">
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
            </div>
        </div>
        <button @click="register" class="button is-success">Register</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data(){
        return{
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    },
    methods: {
       register(){
           let newUser = {
               firstName: this.firstName,
               lastName: this.lastName,
               email: this.email,
               password: this.password
           }
            //console.log(newUser);
            axios.post('http://localhost:3000/signup', newUser);
        }
    }
};
</script>

<style scoped>
h1 {
    font-size:3rem;
    font-weight: bold;
    font-style: italic;
    color: rgb(141, 197, 150);
    text-align: center;
}

.field{
    padding-bottom: 1rem;
}

.form{
    padding: 2rem 25rem 2rem 25rem;
}

</style>
