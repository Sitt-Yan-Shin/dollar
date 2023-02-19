const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err})
    }
});

router.post('/', async (req, res) => {
    /* const post = new Post({
        currency: req.body.currency,
        buy: req.body.buy,
        sell: req.body.sell
    });
    try{
        const savedPost = await post.save()
        res.json(savedPost);
    }catch(err){
        res.json({message: err})
    } */
    Post.insertMany(req.body).then((post) => {
        res.send(post);
    }).catch((err) => {
        res.send(err)
    })
});

router.delete('/', async (req, res) => {
    try{
        const deleteAll = await Post.deleteMany({});
        res.json(deleteAll);
    }catch(err){
        res.json({message: err})
    }
})

router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err})
    }
});

router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Post.deleteOne({_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err})
    }
});

router.patch('/:postId', async (req, res) => {
    try{
        const updatePost = await Post.updateOne({_id: req.params.postId}, { $set: {currency: req.body.currency}});
        res.json(updatePost)
    }catch(err){
        res.json({message: err})
    }
});


module.exports = router;