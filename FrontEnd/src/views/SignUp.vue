<template>
    <div class = "SignUp">
        <link rel="stylesheet" 
            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
            integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
            crossorigin="anonymous">
        
        <h1>SIGN UP</h1>
         <div class="form">

             <!-- First Name Input -->
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input @keyup.enter="register" :class="inputType1" type="text" v-model="firstName" placeholder="First Name">
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i :class="icon1"></i>
                    </span>
                </p>
                <p :class="pClass1">{{errMsg1}}</p>
            </div>
             
            <!-- Last Name Input -->
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input @keyup.enter="register" :class="inputType2" type="text" v-model="lastName" placeholder="Last Name">
                    <span class="icon is-small is-left">
                        <i class="fas fa-id-card"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i :class="icon2"></i>
                    </span>
                </p>
                <p :class="pClass2">{{errMsg2}}</p>
            </div>

            <!-- Email Input -->
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input @keyup.enter="register" :class="inputType3" type="email" v-model="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i :class="icon3"></i>
                    </span>
                </p>
                <p :class="pClass3">{{errMsg3}}</p>
            </div>

            <!-- Password Input -->
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input @keyup.enter="register" :class="inputType4" type="password" v-model="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i :class="icon4"></i>
                    </span>
                </p>
                <p :class="pClass4">{{errMsg4}}</p>
            </div>
        </div>
        
        <!-- Register Button-->
        <button @click="register" class="button is-success">Register</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data(){
        return{

            // Initialize inputs to empty strings
            firstName: '',
            lastName: '',
            email: '',
            password: '',

            // Used to change p class
            pClass1: '',
            pClass2: '',
            pClass3: '',
            pClass4: '',

            // Used to change input class
            inputType1: 'input is-dark',
            inputType2: 'input is-dark',
            inputType3: 'input is-dark',
            inputType4: 'input is-dark',
            
            // Used to store error messages if any occur
            errMsg1: '',
            errMsg2: '',
            errMsg3: '',
            errMsg4: '',

            // Used to change icon
            icon1: '',
            icon2: '',
            icon3: '',
            icon4: '',
        }
    },
    methods: {
        
        // Method to register a new user
        // Executed when "Login" button is pressed or when the enter key is pressed
        register(){

           // Storing user input in a user model
           let newUser = {
               firstName: this.firstName,
               lastName: this.lastName,
               email: this.email,
               password: this.password
           }

            // Sending user input to backend to check for any errors
            axios.post('http://localhost:3000/signup', newUser)
                .then(res => {

                    if (res.data.title == 'errors'){
                        
                        // First name input is empty
                        if(res.data.isErrFN){
                            this.inputType1 = 'input is-danger'
                            this.pClass1 = 'help is-danger';
                            this.errMsg1 = res.data.errorFN;
                            this.icon1 = 'fas fa-exclamation-triangle';
                        }
                        else{
                            this.inputType1 = 'input is-success'
                            this.pClass1 = '';
                            this.errMsg1 = '';
                            this.icon1 = 'fas fa-check';
                        }

                        // Last name input is empty
                        if(res.data.isErrLN){
                            this.inputType2 = 'input is-danger'
                            this.pClass2 = 'help is-danger';
                            this.errMsg2 = res.data.errorLN;
                            this.icon2 = 'fas fa-exclamation-triangle';
                        }
                        else{
                            this.inputType2 = 'input is-success'
                            this.pClass2 = '';
                            this.errMsg2 = '';
                            this.icon2 = 'fas fa-check';
                        }

                        // Email input is empty or already in use
                        if(res.data.isErrEmail){
                            this.inputType3 = 'input is-danger'
                            this.pClass3 = 'help is-danger';
                            this.errMsg3 = res.data.errorEmail;
                            this.icon3 = 'fas fa-exclamation-triangle';
                        }
                        else{
                            this.inputType3 = 'input is-success';
                            this.pClass3 = '';
                            this.errMsg3 = '';
                            this.icon3 = 'fas fa-check';
                        }

                        // Password input is empty or input is less than 6 characters
                        if(res.data.isErrPass){
                            this.inputType4 = 'input is-danger'
                            this.pClass4 = 'help is-danger';
                            this.errMsg4 = res.data.errorPass;
                            this.icon4 = 'fas fa-exclamation-triangle';
                        }
                        else{
                            this.inputType4 = 'input is-success'
                            this.pClass4 = '';
                            this.errMsg4 = '';
                            this.icon4 = 'fas fa-check';
                        }
                    }

                    // Succesful Registration
                    else{

                        // Redirects to login page
                        this.$router.push({name: `Login`}).catch(e => {
                            if (e.name != "NavigationDuplicated") {
                                throw e;
                            }
                        }) 
                    }    
                })
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

p {
    text-align: left;
}

</style>
