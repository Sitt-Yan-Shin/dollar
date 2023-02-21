const express = require('express');
const router = express.Router();
const Gold = require('../models/GoldPrices');

router.get('/', async (req, res) => {
    try{
        const gold = await Gold.find();
        res.json(gold);
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
    Gold.insertMany(req.body).then((gold) => {
        res.send(gold);
    }).catch((err) => {
        res.send(err)
    })
});

router.delete('/', async (req, res) => {
    try{
        const deleteAll = await Gold.deleteMany({});
        res.json(deleteAll);
    }catch(err){
        res.json({message: err})
    }
});

router.get('/:goldId', async (req, res) => {
    try{
        const gold = await Gold.findById(req.params.goldId);
        res.json(gold);
    }catch(err){
        res.json({message: err})
    }
});

router.delete('/:goldId', async (req, res) => {
    try{
        const removedPost = await Gold.deleteOne({_id: req.params.goldId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err})
    }
});

router.patch('/:goldId', async (req, res) => {
    try{
        const updatePost = await Gold.updateOne({_id: req.params.goldId}, { $set: {currency: req.body.currency}});
        res.json(updatePost)
    }catch(err){
        res.json({message: err})
    }
});

module.exports = router;