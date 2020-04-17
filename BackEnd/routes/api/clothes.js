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

    const client = await mongodb.MongoClient.connect('mongodb+srv://Admin:MW9scrg59teSRm9M@koombacluster-rglom.mongodb.net/test?retryWrites=true&w=majority', {
       useNewUrlParser: true 
    });

    return client.db('KoombaDataBase').collection('ShopItems');
}


module.exports = router;