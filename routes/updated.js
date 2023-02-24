const express = require('express');
const router = express.Router();
const Times = require('../models/UpdateTime');

router.get('/', async (req, res) => {
    try{
        const time = await Times.find();
        res.json(time);
    }catch(err){
        res.json({message: err})
    }
});

router.delete('/', async (req, res) => {
    try{
        const deleteAll = await Times.deleteMany({});
        res.json(deleteAll);
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
    Times.insertMany(req.body).then((time) => {
        res.send(time);
    }).catch((err) => {
        res.send(err)
    })
});

router.patch('/:timeId', async (req, res) => {
    try{
        const updatedTime = await Times.updateOne({_id: req.params.timeId}, { $set: {updated: req.body.updated}});
        res.json(updatedTime)
    }catch(err){
        res.json({message: err})
    }
});

module.exports = router;