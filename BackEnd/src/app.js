const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/signup', (req, res, next) =>{

    firstName = req.body.firstName;
    lastName = req.body.lastName;
    email = req.body.email;
    password = req.body.password;

    hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        hashedPassword: hashedPassword
    });
    console.log(newUser);
    newUser.save(function(error) {
        if (error) {
           console.log('error')
        }
    });
});



// web listener
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
   console.log('Server listening on port ' + app.get('port'));
});