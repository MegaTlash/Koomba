const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

/*

//Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostCollection();
    res.send(await posts.find({}).toArray());

})


//loadPostsCollection
async function loadPostCollection(){
        useNewUrlParser: true
    })
    return client.db('vue_express').collection('posts');
}

*/

module.exports = router;