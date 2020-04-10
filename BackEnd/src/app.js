const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//Registering a new user
app.post('/signup', (req, res, next) =>{

    firstName = req.body.firstName;
    lastName = req.body.lastName;
    email = req.body.email;
    password = req.body.password;

    var errorFN = '', errorLN = '', errorEmail = '', errorPass = '';
    var isErrFN = false, isErrLN = false, isErrEmail = false, isErrPass = false;

    if (firstName == ''){
        errorFN = 'First name cannot be empty';
        isErrFN = true;
    }

    if (lastName == ""){
        errorLN = 'Last name cannot be empty';
        isErrLN = true;
    }

    if (email == ''){
        errorEmail = 'E-mail cannot be empty';
        isErrEmail = true;
    }

    if (password == ''){
        errorPass = 'Password cannot be empty';
        isErrPass = true;
    }
    else if (password.length < 6){
        errorPass = 'Password must be at least 6 characters';
        isErrPass = true;
    }

    hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        hashedPassword: hashedPassword
    });
    
    //Catching errors (might be the problem why valid email is getting pushed with empty inputs)
    if(isErrFN && isErrLN && isErrEmail && isErrPass){
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

    newUser.save(err => {

        //E-mail already exists in database
        if (err) {
            console.log('e')
            return res.json({
                title: 'emailExists',
                
                errorFN: errorFN,
                errorLN: errorLN,
                errorEmail: 'Email already exists',
                errorPass: errorPass,
            
                isErrFN: isErrFN,
                isErrLN: isErrLN,
                isErrPass: isErrPass
            })
        }

        //Returning inputs, however, there may still be errors
        return res.json({
            
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })
    });
});



// web listener
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
   console.log('Server listening on port ' + app.get('port'));
});