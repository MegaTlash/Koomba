const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// database config
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/userdata', {
      useNewUrlParser: true
   },
   function(error) {
      if (error) {
         return console.error('Unable to connect:', error);
      }
   });
//, {useMongoClient: true});
mongoose.set('useCreateIndex', true);

const userSchema = new Schema({
    firstName: String,
    lastName: String, 
    email: {
        unique: true,
        type: String
    },
    hashedPassword: String,
}, {
    collection: 'users'
});

let User = mongoose.model('User', userSchema);
module.exports = User;