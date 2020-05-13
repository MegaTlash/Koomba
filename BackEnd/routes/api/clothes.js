const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();



//getting the posts
router.get('/', async (req, res) => {
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray());

})


//Reading the backend from clound db
async function loadPostCollection(){
    
    /* Look at Mongodb cloud documentation to check how to connect your own database(ADD in your url username and password into the quoatations
    const client = await mongodb.MongoClient.connect('', {
       useNewUrlParser: true 
    });
    */
    return client.db('KoombaDataBase').collection('ShopItems');
}


module.exports = router;
