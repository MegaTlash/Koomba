//Always needed for in the beginning
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
//let session = require('express-session');


//middleware
//app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

//Getting the different types of url
app.use(function(request, respone, next){
    console.log('REQUEST: url = ' + request.url);
    next();
});


const clothes = require('./routes/api/clothes.js')

app.use('/api/clothes', clothes);




//Going to port 3000
app.set('port', 3000);


//Telling us where the port is listening onto
app.listen(app.get('port'), () => {
    console.log('Node.js/Express is listening on port ' +  app.get('port'));
});