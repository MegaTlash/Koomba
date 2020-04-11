const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//Process for registering a new user
app.post('/signup', (req, res, next) =>{

    firstName = req.body.firstName;
    lastName = req.body.lastName;
    email = req.body.email;
    password = req.body.password;

    var errorFN = '', errorLN = '', errorEmail = '', errorPass = '';
    var isErrFN = false, isErrLN = false, isErrEmail = false, isErrPass = false;

    //First name input field is left empty
    if (firstName == ''){
        errorFN = 'First name cannot be empty';
        isErrFN = true;
    }

    //Last name input field is left empty
    if (lastName == ""){
        errorLN = 'Last name cannot be empty';
        isErrLN = true;
    }

    //Email input field is left empty
    if (email == ''){
        errorEmail = 'E-mail cannot be empty';
        isErrEmail = true;
    }

    //Password input field is left empty
    if (password == ''){
        errorPass = 'Password cannot be empty';
        isErrPass = true;
    }
    //Password given is less than 6 characters
    else if (password.length < 6){
        errorPass = 'Password must be at least 6 characters';
        isErrPass = true;
    }

    //Hashing password
    hashedPassword = bcrypt.hashSync(password, 10);
    
    //Catching errors
    if((isErrFN || isErrLN || isErrPass) && isErrEmail){
        
        return res.json({
            title: 'errors',

            errorFN: errorFN,
            errorLN: errorLN,
            errorEmail: errorEmail,
            errorPass: errorPass,
            
            isErrFN: isErrFN,
            isErrLN: isErrLN,
            isErrEmail: isErrEmail,
            isErrPass: isErrPass
        })
    }

    //Creating a new user
    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        hashedPassword: hashedPassword
    });

    //Saving new user to mongo database
    newUser.save(function(error){

        //If email given is found in database
        if (error) {
            return res.json({
                title: 'errors',
    
                errorFN: errorFN,
                errorLN: errorLN,
                errorEmail: 'Email already in use',
                errorPass: errorPass,
                
                isErrFN: isErrFN,
                isErrLN: isErrLN,
                isErrEmail: true,
                isErrPass: isErrPass
            })
        }

        //No errors in input
        return res.json({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })
    })
    
});

//Process for logging in
app.post('/login', (req, res, next) => {

    email = req.body.email;
    password = req.body.password;
    
    //Checking if email and password are empty
    if (email == '' && password == ''){
        return res.json({
            title: 'errors',
            emailEmpty: true,
            passEmpty: true,
            errorEmail: 'Email cannot be left empty',
            passError: 'Password cannot be left empty'
        })
    }
    //Checking if email is left empty and password isn't
    else if (email == '' && password != ''){
        return res.json({
            title: 'errors',
            emailEmpty: true,
            passNoMatch: true,
            errorEmail: 'Email cannot be left empty',
            passError: 'Email cannot be left empty'
        })
    }else{
        //Finding user in database
        User.find({email: email}).then(function(result){

            //No user is found in the database
            if (result.length != 1){
                return res.json({
                    title: 'errors',
                    emailNotExists: true, 
                    passNoMatch: true,
                    errorEmail: 'Email does not exist',
                    passError: 'Email does not exist'
                })
            }
            //User found, now check password
            else{
                //Password matches (Login successful)
                if (bcrypt.compareSync(password, result[0].hashedPassword)) {
                    return res.json({
                       title: 'Login Success'
                    })
                }
                
                //Password does not match
                else{
                    
                    //Password input field is left empty
                    if (password == ''){
                        return res.json({
                            title: 'errors',
                            passEmpty: true,
                            passError: 'Password cannot be left empty'
                        })
                    }

                    //Invalid password given
                    return res.json({
                        title: 'errors',
                        passNoMatch: true,
                        passError: 'Password does not match email'
                    })
                }
            }
        })
    }
});


//Web listener
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
   console.log('Server listening on port ' + app.get('port'));
});