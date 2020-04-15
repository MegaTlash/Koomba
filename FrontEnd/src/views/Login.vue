<template>
    <div class = "Login">
        <link rel="stylesheet" 
            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
            integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
            crossorigin="anonymous">
        <h1>LOGIN</h1>
         <div class="form">

            <!-- Email Input -->
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input @keyup.enter="login" :class="inputType1" type="email" v-model="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i :class="icon1"></i>
                    </span>
                </p>
                <p :class="pClass1">{{errMsg1}}</p>
            </div>

            <!-- Password Input -->
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input @keyup.enter="login" :class="inputType2" type="password" v-model="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i :class="icon2"></i>
                    </span>
                </p>
                <p :class="pClass2">{{errMsg2}}</p>
            </div>
        </div>

        <button @click="login" class="button is-success">Sign In</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: '',

            pClass1: '',
            pClass2: '',

            inputType1: 'input is-dark',
            inputType2: 'input is-dark',
            
            errMsg1: '',
            errMsg2: '',

            icon1: '',
            icon2: '',
        }
    },
    methods: {
        login(){
            let user = {
                email: this.email,
                password: this.password
            }
        
            axios.post('http://localhost:3000/login', user).then(res => {
                if (res.data.title == 'errors'){
                    
                    //Email error check
                    if(res.data.emailNotExists || res.data.emailEmpty){
                        this.inputType1 = 'input is-danger'
                        this.pClass1 = 'help is-danger';
                        this.errMsg1 = res.data.errorEmail;
                        this.icon1 = 'fas fa-exclamation-triangle';
                    }
                    else{
                        this.inputType1 = 'input is-success'
                        this.pClass1 = '';
                        this.errMsg1 = '';
                        this.icon1 = 'fas fa-check';
                    }
                    
                    //Password error check
                    if(res.data.passNoMatch || res.data.passEmpty){
                        this.inputType2 = 'input is-danger';
                        this.pClass2 = 'help is-danger';
                        this.errMsg2 = res.data.passError;
                        this.icon2 = 'fas fa-exclamation-triangle';
                    }
                    else{
                        this.inputType2 = 'input is-success'
                        this.pClass2 = '';
                        this.errMsg2 = '';
                        this.icon2 = 'fas fa-check';
                    }
                }

                //Login Successful
                else {
                    
                    // Take away login option and replace it with login
                    document.getElementById('initial').style.display = "none";
                    document.getElementById('logout').style.display = "block";
                    document.getElementById('username').innerHTML = res.data.firstName;
                    // Go home
                    this.$router.push({name: `Home`}).catch(e => {
                        if (e.name != "NavigationDuplicated") {
                            throw e;
                        }
                    });
                }  
            })
        },

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

p {
    text-align: left;
}

.field{
    padding-bottom: 1rem;
}

.form{
    padding: 2rem 25rem 2rem 25rem;
}

</style>
