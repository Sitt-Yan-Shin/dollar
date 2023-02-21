const express = require('express');
const router = express.Router();
const Fuel = require('../models/FuelPrices');

router.get('/', async (req, res) => {
    try{
        const fuels = await Fuel.find();
        res.json(fuels);
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
    Fuel.insertMany(req.body).then((fuel) => {
        res.send(fuel);
    }).catch((err) => {
        res.send(err)
    })
});

router.delete('/', async (req, res) => {
    try{
        const deleteAll = await Fuel.deleteMany({});
        res.json(deleteAll);
    }catch(err){
        res.json({message: err})
    }
});

router.get('/:fuelId', async (req, res) => {
    try{
        const fuel = await Fuel.findById(req.params.fuelId);
        res.json(fuel);
    }catch(err){
        res.json({message: err})
    }
});

router.delete('/:fuelId', async (req, res) => {
    try{
        const removedPost = await Fuel.deleteOne({_id: req.params.fuelId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err})
    }
});

router.patch('/:fuelId', async (req, res) => {
    try{
        const updatePost = await Fuel.updateOne({_id: req.params.fuelId}, { $set: {currency: req.body.currency}});
        res.json(updatePost)
    }catch(err){
        res.json({message: err})
    }
});


module.exports = router;