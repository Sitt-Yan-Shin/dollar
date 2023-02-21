const express = require('express');
const router = express.Router();
const News = require('../models/News');

router.get('/', async (req, res) => {
    try{
        const news = await News.find();
        res.json(news);
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
    News.insertMany(req.body).then((news) => {
        res.send(news);
    }).catch((err) => {
        res.send(err)
    })
});

router.delete('/', async (req, res) => {
    try{
        const deleteAll = await News.deleteMany({});
        res.json(deleteAll);
    }catch(err){
        res.json({message: err})
    }
});

router.get('/:newsId', async (req, res) => {
    try{
        const gold = await News.findById(req.params.newsId);
        res.json(gold);
    }catch(err){
        res.json({message: err})
    }
});

router.delete('/:newsId', async (req, res) => {
    try{
        const removedPost = await News.deleteOne({_id: req.params.newsId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err})
    }
});

router.patch('/:newsId', async (req, res) => {
    try{
        const updatePost = await News.updateOne({_id: req.params.newsId}, { $set: {currency: req.body.currency}});
        res.json(updatePost)
    }catch(err){
        res.json({message: err})
    }
});

module.exports = router;