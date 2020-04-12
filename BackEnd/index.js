//Always needed for in the beginning
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
//let session = require('express-session');

const http = require('http').createServer(app);
const io = require('socket.io')(http);


//middleware
//app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

//Getting the different types of url
app.use(function(request, response, next){
    console.log('REQUEST: url = ' + request.url);
    next();
});

io.on('connection', function(socket) {
    console.log('User connected');
});

const clothes = require('./routes/api/clothes.js')

app.use('/api/clothes', clothes);

//Going to port 3000
app.set('port', 3000);

//Telling us where the port is listening onto
app.set('port', process.env.PORT || 3000);
http.listen(app.get('port'), () => {
    console.log('Node.js/Express is listening on port ' +  app.get('port'));
});


