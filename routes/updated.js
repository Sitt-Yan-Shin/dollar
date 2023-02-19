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

router.post('/', async (req, res) => {
    const time = new Times({
        updated: req.body.updated
    });
    try{
        const savedTime = await time.save()
        res.json(savedTime);
    }catch(err){
        res.json({message: err})
    }
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